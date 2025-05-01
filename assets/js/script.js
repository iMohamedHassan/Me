const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Initialize EmailJS with your User ID
emailjs.init("M1Rs109ZxToDj9ZkK"); // Replace "your-user-id" with your actual EmailJS User ID

// Add an event listener to the contact form
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Send the form data using EmailJS
  emailjs
    .sendForm("service_pfl3weh", "template_hs8ygs7", this) // Replace "template_yourTemplateID" with your actual template ID
    .then(
      function () {
        alert("Message sent successfully!");
        document.querySelector(".contact-form").reset(); // Clear the form after submission
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      }
    );
});