let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectPlanButtons = document.querySelectorAll(".plan button");

let modalActionNegative = document.querySelector(".modal__action--negative");

let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

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
  // mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  close();
});

toggleButton.addEventListener("click", function () {
  // mobileNav.style.display = "block";
  // backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
