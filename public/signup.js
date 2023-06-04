// create signup script
const signupHandler = async(e) => {
    console.log(e);
    e.preventDefault();
    const firstName = document.querySelector("#firstName").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    const username_signup = document.querySelector("#username_signup").value.trim();
    const password_signup = document.querySelector("#password_signup").value.trim();
    console.log(firstName);
    console.log(lastName);
    console.log(username_signup);
    console.log(password_signup);

    if(firstName && lastName && username_signup && password_signup) {
        const res = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({ username_signup, password_signup, firstName, lastName }),
            headers: {"Content-Type": "application/json"},
        });

        if(res.ok) {
            document.location.replace("/login")
        } else {
            alert(res.statusText);
        }
    }
};

document.querySelector(".signup-form").addEventListener("submit", signupHandler);