// Forgot Password logic
// Modal Elements
const forgotPasswordLink = document.getElementById("forgotPasswordLink");
const forgotPasswordModal = document.getElementById("forgotPasswordModal");
const closeModal = document.getElementById("closeModal");
const forgotPasswordForm = document.getElementById("forgotPasswordForm");

// Show modal on clicking "Forgot Password?"
forgotPasswordLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    forgotPasswordModal.style.display = "flex"; // Show the modal
});

// Close modal on clicking "Close" button
closeModal.addEventListener("click", () => {
    forgotPasswordModal.style.display = "none"; // Hide the modal
});

// forgot password logic

const forgotSubmit = document.getElementById("forgotPasswordBtn");

forgotSubmit.addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.getElementById("forgotEmail").value.trim();

    try {
        const response = await axios.post(`${BASE_URL}/api/forgotpassword`, {
            email,
        });
        alert(response.data.message || "Password reset email sent!");
        forgotPasswordForm.reset(); // Reset the form
        forgotPasswordModal.style.display = "none"; // Hide the modal
    } catch (error) {
        console.log(error);
        alert(
            error.response?.data?.message ||
                "An error occurred. Please try again."
        );
    }
});
