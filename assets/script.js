const form = document.querySelector("form");
const span = document.getElementById("spanError");
const input = document.getElementById("inputEmail");
const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!input.value) {
        span.style.display = "block";
        input.style.border = "1px solid red";
        span.textContent = "A input cannot be empty, please.";
    }else if (input.value && !validEmail.test(input.value)) {
        span.style.display = "block";
        input.style.border = "1px solid red";
        span.textContent = "Please provide a valid email address";
    }else{
        input.style.border = "";
        span.style.display = "none";
    }
});