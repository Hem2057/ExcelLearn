document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    const form = document.querySelector(".contact__form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.querySelector("input[placeholder='Your Name']").value.trim();
            const email = document.querySelector("input[placeholder='Your Email']").value.trim();
            const message = document.querySelector("textarea").value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Please fill out all fields.");
                return;
            }

            alert("Email sent successfully!");
            form.reset();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.querySelector(".nav__menu");

    toggle.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    const navToggle = document.querySelector(".nav__toggle");
    const navMenu = document.querySelector(".nav__menu");

    if (navToggle) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Your message has been sent successfully!");
        });
    }

    const testimonials = document.querySelectorAll(".testimonial");
    let currentIndex = 0;

    function showNextTestimonial() {
        testimonials.forEach((t, index) => {
            t.style.display = index === currentIndex ? "block" : "none";
        });

        currentIndex = (currentIndex + 1) % testimonials.length;
    }

    if (testimonials.length > 1) {
        setInterval(showNextTestimonial, 3000);
        showNextTestimonial();
    }
});

const loginPopup = document.getElementById("login-popup");
const registerPopup = document.getElementById("register-popup");

const loginBtn = document.getElementById("enroll-btn");
const registerBtn = document.querySelector(".btn-primary");

const loginClose = document.getElementById("login-close");
const registerClose = document.getElementById("register-close");

loginBtn.addEventListener("click", function (event) {
    event.preventDefault();
    loginPopup.style.display = "flex";
});

registerBtn.addEventListener("click", function (event) {
    event.preventDefault();
    registerPopup.style.display = "flex";
});

loginClose.addEventListener("click", function () {
    loginPopup.style.display = "none";
});

registerClose.addEventListener("click", function () {
    registerPopup.style.display = "none";
});
window.addEventListener("click", function (event) {
    if (event.target === loginPopup) {
        loginPopup.style.display = "none";
    }
    if (event.target === registerPopup) {
        registerPopup.style.display = "none";
    }
});