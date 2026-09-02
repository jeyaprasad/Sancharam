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
    let icon = document.getElementById("eye-icon-login");
    if (password.type === "password") {
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function toggleSignupPassword() {
    let password = document.getElementById("signup-password");
    let icon = document.getElementById("eye-icon-signup");
    if (password.type === "password") {
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

// Handle Form Submission (Redirect to Home Page)
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email === "demo@sancharam.com" && password === "demo123") {
        alert("Login Successful! Redirecting...");
        window.location.href = "../home.html";  // Redirect to home page after login
    } else {
        alert("Invalid credentials. Please use the demo credentials.");
    }
});

document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Account Created! Redirecting...");
    window.location.href = "../home.html";  // Redirect to home page after sign-up
});
