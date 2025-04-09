// app.js

// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// app.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar float shadow on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = this;
  const responseEl = document.getElementById('form-response');

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      responseEl.classList.add('show');
      form.reset();
    } else {
      responseEl.innerText = "Oops! Something went wrong.";
      responseEl.classList.add('show');
    }
  })
  .catch(error => {
    responseEl.innerText = "Error sending message.";
    responseEl.classList.add('show');
  });
});
const body = document.body;
const toggleBtn = document.getElementById("theme-toggle-btn");
const themeIcon = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");

// Initial load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeIcon.src = "assets/images/icons/dark.png";
  themeLabel.textContent = "Dark Mode";
} else {
  themeIcon.src = "assets/images/icons/light.png";
  themeLabel.textContent = "Light Mode";
}

// On click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  const isDark = body.classList.contains("dark-theme");

  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeIcon.src = isDark ? "assets/images/icons/dark.png" : "assets/images/icons/light.png";
  themeLabel.textContent = isDark ? "Dark Mode" : "Light Mode";
});
