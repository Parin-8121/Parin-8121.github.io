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

// Lightbox element references
const skills = document.querySelectorAll('.skill');
const lightbox = document.getElementById('skillLightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-description');
const lightboxFun = document.getElementById('lightbox-funfact');
const closeBtn = document.querySelector('.close-btn');

// Data for each skill
const skillData = {
  "HTML": {
    img: "assets/images/skills/html.png",
    desc: "Build structured webpages using semantic tags and forms.",
    fun: "My first webpage was a tribute page to samosas 😋"
  },
  "CSS": {
    img: "assets/images/skills/css.png",
    desc: "Style layouts, add animations, and handle responsiveness.",
    fun: "Spent 2 hours fixing a layout—missing a `;` 😅"
  },
  "JavaScript": {
    img: "assets/images/skills/js.png",
    desc: "Add interactivity, work with DOM and APIs.",
    fun: "Spammed `console.log` like a chat at first 😆"
  },
  "Java": {
    img: "assets/images/skills/java.png",
    desc: "Create OOP-based programs and desktop GUIs.",
    fun: "Built a vending machine app with funny item names 🥤"
  },
  "Git": {
    img: "assets/images/skills/git.png",
    desc: "Manage version control, branches, and push to GitHub.",
    fun: "Committed 'final_final.js' before learning branches 🤦"
  },
  "VS Code": {
    img: "assets/images/skills/vs.png",
    desc: "Efficient coding with extensions, Git, and theming.",
    fun: "I change themes like outfits — new one every week 🌈"
  },
  "Photoshop": {
    img: "assets/images/skills/photoshop.svg",
    desc: "Edit, clean, and enhance images for web use.",
    fun: "Photoshopped myself into a Marvel poster 💥"
  },
  "Illustrator": {
    img: "assets/images/skills/illustrator.svg",
    desc: "Create vector logos and clean scalable designs.",
    fun: "My first project was a pizza icon 🍕"
  },
  "Linux": {
    img: "assets/images/skills/linux.png",
    desc: "Use shell commands, permissions, and file management.",
    fun: "Learned `rm -rf` the hard way 😬"
  },
  "UI Design": {
    img: "assets/images/skills/ui.png",
    desc: "Design clean, responsive UI components and layouts.",
    fun: "I get UI ideas while browsing food apps 🍔"
  }
};

// Attach event listener to each skill box
skills.forEach(skill => {
  skill.addEventListener('click', () => {
    const skillName = skill.querySelector('p').textContent;
    const data = skillData[skillName];

    if (data) {
      lightboxImg.src = data.img;
      lightboxImg.alt = skillName;
      lightboxTitle.textContent = skillName;
      lightboxDesc.textContent = data.desc;
      lightboxFun.textContent = data.fun;
      lightbox.classList.remove('hidden');
    }
  });
});

// Close button and outside click to close
closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
  }
});

// Close lightbox on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.classList.add('hidden');
  }
});
// Close lightbox on clicking outside
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
  }
});
