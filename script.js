// Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerText = "Name required";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Invalid email";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (valid) {
        alert("Submitted!");
    }
});

// Quiz
function checkAnswer(choice) {
    let result = document.getElementById("quiz-result");

    if (choice === "calm") {
        result.innerText = "You are Matcha Latte 🍵";
    } else {
        result.innerText = "You are Strawberry Matcha 🍓";
    }
}

// Scroll Animation
window.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".fade-in");

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});