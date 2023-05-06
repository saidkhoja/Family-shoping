const loginForm = document.querySelector("#login-form"); // login form elementini qidirish
const emailInput = document.querySelector("#email-input"); // e-mail input elementini qidirish
const passwordInput = document.querySelector("#password-input"); // parol input elementini qidirish

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        const response = await fetch("https://fakestoreapi.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            throw new Error("Login yoki parol xato");
        }

        const data = await response.json();
        const token = data.token;

        localStorage.setItem("token", token);

        window.location.href = "family.html";
    } catch (error) {
        console.error(error);
    }
});
