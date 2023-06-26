const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
    try {
        const userData = await User.create({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            username:req.body.username,
            password:req.body.password,
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;
            res.status(200).json(userData);
        });
    } catch (error) {
        res.status(400).json(error);
    }
});

router.post("/login", async (req, res) => {
    console.log(req.body)
    try {
        const userData = await User.findOne({
            where: {username: req.body.username},
        });
        console.log(userData)
        if(!userData) {
            res.status(400).json({message: "Username not recognised, please try again"});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res.status(400).json({message: "Incorrect password entered, please try again"});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.json({user: userData, message: "Successfully logged in"})
        });
    } catch (error) {
        res.status(400).json(error)
    }
});

router.post("/logout", (req, res) => {
    if(req.session.logged_in){
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

// router.post("/signup", (req, res) => {
//     if(!req.session.logged_in){
//         req.session.save(() => {
//             req.session.user_id = userData.id;
//             res.json({user: userData, message: "Successfully registered"})
//         });
//     } else {
//         res.status(404).end();
//     }
// });

module.exports = router;