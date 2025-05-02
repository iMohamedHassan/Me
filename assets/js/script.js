const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

emailjs.init("M1Rs109ZxToDj9ZkK");

document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_pfl3weh", "template_hs8ygs7", this)
    .then(
      function () {
        alert("Message sent successfully!");
        document.querySelector(".contact-form").reset();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      }
    );
});