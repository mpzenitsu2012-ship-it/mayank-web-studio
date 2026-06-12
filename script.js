// =======================
// Typing Effect
// =======================

const typingText = document.getElementById("typing");

const words = [
  "Frontend Developer",
  "UI/UX Designer",
  "Website Creator",
  "Freelancer",
  "Digital Creator"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!deleting) {

    typingText.textContent =
      currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {

      deleting = true;

      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingText.textContent =
      currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;
      wordIndex++;

      if (wordIndex >= words.length) {
        wordIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();


// =======================
// Custom Cursor
// =======================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});


// =======================
// Scroll Reveal Animation
// =======================

const reveals =
document.querySelectorAll(".reveal");

function revealSections() {

  reveals.forEach(section => {

    const top =
      section.getBoundingClientRect().top;

    const windowHeight =
      window.innerHeight;

    if (top < windowHeight - 100) {

      section.classList.add("active");

    }

  });

}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();


// =======================
// Navbar Active Link
// =======================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.clientHeight;

    if (
      pageYOffset >= sectionTop
      &&
      pageYOffset <
      sectionTop + sectionHeight
    ) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href")
      === "#" + current
    ) {

      link.classList.add("active");

    }

  });

});


// =======================
// Button Glow Effect
// =======================

const buttons =
document.querySelectorAll(
  ".btn, .btn-outline, button"
);

buttons.forEach(btn => {

  btn.addEventListener(
    "mouseenter",
    () => {

      btn.style.transform =
        "translateY(-5px) scale(1.03)";

    }
  );

  btn.addEventListener(
    "mouseleave",
    () => {

      btn.style.transform =
        "translateY(0px) scale(1)";

    }
  );

});


// =======================
// Glass Card Floating
// =======================

const card =
document.querySelector(".glass-card");

let floatDirection = 1;

setInterval(() => {

  if(card){

    card.style.transform =
      `translateY(${floatDirection * 12}px)`;

    floatDirection *= -1;

  }

}, 2000);


// =======================
// Page Load Animation
// =======================

window.addEventListener(
  "load",
  () => {

    document.body.style.opacity = "1";

  }
);


// =======================
// Console Signature 😎
// =======================

console.log(`
🚀 Mayank Web Studio

Premium Portfolio Website
Built With HTML • CSS • JS

Designed for Future Clients 😎
`);
