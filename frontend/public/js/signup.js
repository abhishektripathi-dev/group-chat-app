const BASE_URL = "http://localhost:3000";


// Handle signup form submission
const signupForm = document.getElementById("signupform");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // Send user data to server
        const response = await axios.post(`${BASE_URL}/api/signup`, {
            name,
            email,
            phone,
            password,
        });

        // Handle response
        if (response.status === 201) {
            alert("User registered successfully! Redirecting to Sign In.");
            // Redirect to login page
            window.location.href = "./signin.html";
        }
    } catch (error) {
        if (
            error.response &&
            error.response.data.message === "User already exists"
        ) {
            // Handle user already exists error
            alert("User already exists. Please log in.");
            window.location.href = "./login.html";
        } else {
            console.error("Error registering user:", error);
            alert("An error occurred. Please try again later.");
        }
    }
});
