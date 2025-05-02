const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

emailjs.init("M1Rs109ZxToDj9ZkK");

document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_pfl3weh", "template_hs8ygs7", this).then(
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

// Scroll-based animations
const fadeInElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

fadeInElements.forEach((el) => {
  observer.observe(el);
});

// Typing effect
const typingText = document.querySelector(".text-animation span");
const words = [
  "Front-End Web Developer",
  "Creative Designer",
  "Problem Solver",
];
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex][charIndex];
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Back-to-top button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Smooth scroll to the top
backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
