// Toggle password visibility
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("tooglePassword");

togglePassword.addEventListener("click", () => {
    // toggle the input type between password and text
    const type =
        passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);

    // Change the icon accordingly
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});