function signUp() {
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Sign Up Successful!");
    window.location.href = "login.html";
}

function login() {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    if (username === localStorage.getItem("username") &&
        password === localStorage.getItem("password")) {
        alert("Login Successful!");
        window.location.href = "resume.html";
    } else {
        alert("Invalid credentials.");
    }
}

function logout() {
    window.location.href = "login.html";
}