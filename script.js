// LOGIN
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        localStorage.setItem("loginGrowinID", "true");
        window.location.href = "index.html";
    });
}

// CEK LOGIN
if (window.location.pathname.includes("index.html")) {
    if (localStorage.getItem("loginGrowinID") !== "true") {
        alert("Silakan login terlebih dahulu");
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("loginGrowinID");
    alert("Anda telah logout");
    window.location.href = "login.html";
}
