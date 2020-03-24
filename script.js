const CONTACTFORM = document.querySelector(".form");
var CONTACTMODAL = document.querySelector(".modal");

CONTACTFORM.addEventListener('submit', (event) => {
  event.preventDefault();
  fillFormTemplate();
  CONTACTMODAL.style.display = "block";
});

document.querySelector(".modal__close").onclick = function () {
  CONTACTMODAL.style.display = "none";
}

document.querySelector(".modal__confirm").onclick = function () {
  CONTACTMODAL.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == CONTACTMODAL) {
    CONTACTMODAL.style.display = "none";
  }
}

function fillFormTemplate() {
  let subject = document.getElementById("subject").value;
  let description = document.getElementById("details").value;

  if (subject !== "") {
    document.getElementById("modal-subject").innerText = subject;
  }

  if (description !== "") {
    document.getElementById("modal-description").innerText = description;
  }
}

window.onload = function () {
  addNavClickHandler();
}

const addNavClickHandler = () => {
  document.querySelector('.navigation').addEventListener('click', (e) => {
    if (e.target.classList.contains('navigation__link')) {
      let clickedNav = e.target;
      removeSelectedNav();
      selectClickedNav(clickedNav);
    }
  });
}

const removeSelectedNav = () => {
  let navLinks = document.querySelectorAll('.header__navigation .navigation__link');

  navLinks.forEach(navLink => {
    navLink.classList.remove('navigation__link_active');
  });
}

const selectClickedNav = (clickedNav) => {
  clickedNav.classList.add('navigation__link_active');
}