// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Optional: Fade-in effect on scroll
const faders = document.querySelectorAll(".section");

const appearOnScroll = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.1,
  }
);

faders.forEach((section) => {
  section.classList.add("fade-in");
  appearOnScroll.observe(section);
});

// Mobile nav toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuToggle.classList.toggle("open");
});

// Optional: Dark mode / theme toggle (stub for future use)
/*
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
*/

document
  .querySelector('a[href="#home"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

emailjs.init("M1Rs109ZxToDj9ZkK");

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_5gvai3c", "template_hs8ygs7", this).then(
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

// Optional: Add a scroll-to-top button
const scrollToTopBtn = document.getElementById("scroll-to-top");
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Show the button when scrolling down
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});