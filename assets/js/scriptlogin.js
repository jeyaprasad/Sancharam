document.getElementById("signup-link").addEventListener("click", function() {
    document.getElementById("login-form").parentElement.classList.add("hidden");
    document.getElementById("signup-form").classList.remove("hidden");
});

document.getElementById("login-link").addEventListener("click", function() {
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").parentElement.classList.remove("hidden");
});

// Toggle Password Visibility
function togglePassword() {
    let password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
}

function toggleSignupPassword() {
    let password = document.getElementById("signup-password");
    password.type = password.type === "password" ? "text" : "password";
}

// Handle Form Submission (Redirect to Home Page)
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login Successful! Redirecting...");
    window.location.href = "home.html";  // Redirect to home page after login
});

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Account Created! Redirecting...");
    window.location.href = "home.html";  // Redirect to home page after sign-up
});
