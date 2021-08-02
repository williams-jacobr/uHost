let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectPlanButtons = document.querySelectorAll(".plan button");

let modalActionNegative = document.querySelector(".modal__action--negative");

let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");
const ctaButton = document.querySelector(".main-nav__item--cta");
// backdrop.style.display = "block";

close = function () {
  // modal.style.display = "none";
  // backdrop.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
};

console.dir(selectPlanButtons);

for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = 'open' //this wouldn't work, it would overwrite it
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

if (modalActionNegative) {
  modalActionNegative.addEventListener("click", close);
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open-mobile");
  setTimeout(() => (mobileNav.style.display = "none"), 300);
  close();
});

toggleButton.addEventListener("click", function () {
  mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  backdrop.classList.add("open");
  setTimeout(() => mobileNav.classList.add("open-mobile"), 0.1);
});

// ctaButton.addEventListener("animationstart", function (e) {
//   console.log("Animation started", e);
// });

// ctaButton.addEventListener("animationend", function (e) {
//   console.log("Animation finished", e);
// });

// ctaButton.addEventListener("animationiteration", function (e) {
//   console.log("Animation iteration", e);
// });

// ctaButton.addEventListener("animationend", (e) => {
//   e.target.classList.remove(".wiggle");
//   e.target.classList.add(".wiggle");
// });
