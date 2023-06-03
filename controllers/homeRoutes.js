const router = require("express").Router();
const { Blog, User } = require("../models");
const withAuth = require("../utils/withAuth");

router.get("/", withAuth, async(req, res) => {
    try {
        const blogData = await Blog.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render("homepage", {
            blogs,
            logged_in: req.session.logged_in,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/login", (req, res)=> {
    if(req.session.logged_in) {
        res.redirect("/");
        return;
    }
    res.render("login");
});

router.get("/signup", (req, res)=> {
    if(req.session.logged_in) {
        res.redirect("/");
        return;
    }
    res.render("signup");
});

module.exports = router;
