/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

// /*SCROLL HOME*/
// sr.reveal(".home__title", {});
// sr.reveal(".button", { delay: 200 });
// sr.reveal(".home__img", { delay: 400 });
// sr.reveal(".home__social-icon", { interval: 200 });

// /*SCROLL ABOUT*/
// sr.reveal(".about__img", {});
// sr.reveal(".about__subtitle", { delay: 400 });
// sr.reveal(".about__text", { delay: 400 });

// /*SCROLL SKILLS*/
// sr.reveal(".skills__subtitle", {});
// sr.reveal(".skills__text", {});
// sr.reveal(".skills__data", { interval: 200 });
// sr.reveal(".skills__img", { delay: 600 });

// /*SCROLL WORK*/
// sr.reveal(".work__img", { interval: 200 });
// sr.reveal(".portfolio__img", { interval: 100 });

// /*SCROLL CONTACT*/
// sr.reveal(".contact__input", { interval: 200 });

// Select the button
const btn = document.querySelector(".btn-toggle");

// Listen for a click on the button
btn.addEventListener("click", function () {
  // Then toggle (add/remove) the .dark-theme class to the body
  document.body.classList.toggle("dark-theme");
  document.getElementById("logo").classList.toggle("nav__logo-dark-theme");
  document.getElementById("header").classList.toggle("l-header-dark-theme");
  document.getElementById("bt1").classList.toggle("dark-text");
  document.getElementById("bt2").classList.toggle("dark-text");
  document.getElementById("bt3").classList.toggle("dark-text");
  document.getElementById("bt4").classList.toggle("dark-text");
  document.getElementById("bt5").classList.toggle("dark-text");
  document.getElementById("btn-menu").classList.toggle("btn-menu-tog");
  document.getElementById("social-li").classList.toggle("btn-menu-tog");
  document.getElementById("social-de").classList.toggle("btn-menu-tog");
  document.getElementById("social-gi").classList.toggle("btn-menu-tog");
});
