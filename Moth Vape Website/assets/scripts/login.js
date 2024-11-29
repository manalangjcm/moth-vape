const form = document.getElementById("form");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const errorMessage = document.getElementById("error-message");

// Debug
const adminEmail = "admin@admin.com";
const adminPassword = "admin123"

form.addEventListener("submit", (e) => {
    let errors = [];

    errors = getFormErrors(emailInput.value, passwordInput.value);

    if (errors.length > 0)
    {
        e.preventDefault();
        errorMessage.innerText = errors.join("\n");
    }
});

function getFormErrors(emailInput, passwordInput)
{
    let errors = [];

    if (emailInput === '' || emailInput == null)
    {
        errors.push("Email address is required");
    }

    if (passwordInput === '' || passwordInput == null)
    {
        errors.push("Password is required");
    }

    if (passwordInput.length < 8)
    {
        errors.push("Password must have at least 8 characters");
    }

    if (emailInput !== adminEmail || passwordInput !== adminPassword)
    {
        errors.push("Incorrect email or password!");
    }

    return errors;
}

function showPassword()
{
    if (passwordInput.type === "password") 
    {
        passwordInput.type = "text";
    } 
    else 
    {
        passwordInput.type = "password";
    }
}