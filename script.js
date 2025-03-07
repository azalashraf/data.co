document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent page refresh

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Simulate form submission (AJAX can be added later)
        setTimeout(() => {
            successMessage.style.display = "block";
            contactForm.reset();
        }, 1000);
    });
});
