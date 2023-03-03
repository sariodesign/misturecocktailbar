import { nhost } from "../utils/nhost";
console.log('nHost init: ', nhost)
console.log('nHost init auth: ', nhost.auth)
console.log('nHost storage: ', nhost.storage)

const loginForm = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    try {
      await nhost.auth.signIn({
        email: email,
        password: password 
      });
      console.log("Login success!", nhost);
    } catch (error) {
      console.error("Login error:", error);
    }
});

