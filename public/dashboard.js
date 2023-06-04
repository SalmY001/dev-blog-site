const dashboardHandler = async(e) => {
    console.log(e);
    e.preventDefault();
    const title = document.querySelector("#blog-title").value.trim();
    const contents = document.querySelector("#blog-content").value.trim();
    console.log(title);
    console.log(contents);

    if(title && contents) {
        const res = await fetch("/api/user/dashboard", {
            method: "POST",
            body: JSON.stringify({ title, contents }),
            headers: {"Content-Type": "application/json"},
        });

        if(res.ok) {
            document.location.replace("/dashboard")
        } else {
            alert(res.statusText);
        }
    }
};

document.querySelector(".dashboard-form").addEventListener("submit", dashboardHandler);
