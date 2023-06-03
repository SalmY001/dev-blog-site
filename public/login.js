const loginHandler = async(e) => {
    console.log(e);
    e.preventDefault();
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();
    console.log(username);
    console.log(password);

    if(username && password) {
        const res = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: {"Content-Type": "application/json"},
        });

        if(res.ok) {
            document.location.replace("/")
        } else {
            alert(res.statusText);
        }
    }
};

document.querySelector(".login-form").addEventListener("submit", loginHandler);
