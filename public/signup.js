// create signup script
const signupHandler = async(e) => {
    console.log(e);
    e.preventDefault();
    const firstName = document.querySelector("#first_name").value.trim();
    const lastName = document.querySelector("#last_name").value.trim();
    const username_signup = document.querySelector("#username_signup").value.trim();
    const password_signup = document.querySelector("#password_signup").value.trim();
    console.log(first_name);
    console.log(last_name);
    console.log(username_signup);
    console.log(password_signup);

    if(firstName && lastName && username_signup && password_signup) {
        const res = await fetch("/api/user", {
            method: "POST",
            body: JSON.stringify({ firstName, lastName, username_signup, password_signup }),
            headers: {"Content-Type": "application/json"},
        });

        if(res.ok) {
            document.location.replace("/")
        } else {
            alert(res.statusText);
        }
    }
};

document.querySelector(".signup-form").addEventListener("submit", signupHandler);