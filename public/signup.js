const signupHandler = async(e) => {
    console.log(e);
    e.preventDefault();
    const username_signup = document.querySelector("#username_signup").value.trim();
    const password_signup = document.querySelector("#password_signup").value.trim();
    const firstName = document.querySelector("#firstName").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    console.log(username_signup);
    console.log(password_signup);
    console.log(firstName);
    console.log(lastName);

    if(username_signup && password_signup && firstName && lastName) {
        const res = await fetch("/api/user/signup", {
            method: "POST",
            body: JSON.stringify({ username_signup, password_signup, firstName, lastName }),
            headers: {"Content-Type": "application/json"},
        });

        if(res.ok) {
            document.location.replace("/dashboard")
        } else {
            alert(res.statusText);
        }
    }
};

document.querySelector(".signup-form").addEventListener("submit", signupHandler);