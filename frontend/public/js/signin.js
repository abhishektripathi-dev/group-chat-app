const BASE_URL = "http://localhost:3000";

const signinForm = document.getElementById("signinForm");

signinForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
        const response = await axios.post(`${BASE_URL}/api/signin`, {
            email,
            password,
        });
        if (response.status === 200) {
            alert(response.data.message ||"Login successfullty!");
        }
    } catch (error) {
        alert(
            error.response?.data?.message || "An error occurred during login."
        );
    }
});
