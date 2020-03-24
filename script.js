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

const MAINSECTIONSPOSITION = [];

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
  initMainSectionsPosition();
  addNavClickHandler();

  window.addEventListener('scroll', selectNavLinkByScrolling);
}

const addNavClickHandler = () => {
  document.querySelector('.navigation').addEventListener('click', (e) => {
    if (e.target.classList.contains('navigation__link')) {
      let clickedNav = e.target;
      removeSelectedNav();
      selectNav(clickedNav);
    }
  });
}

const removeSelectedNav = () => {
  let navLinks = document.querySelectorAll('.header__navigation .navigation__link');

  navLinks.forEach(navLink => {
    navLink.classList.remove('navigation__link_active');
  });
}

const selectNav = (clickedNav) => {
  clickedNav.classList.add('navigation__link_active');
}

const selectNavLinkByScrolling = () => {
  let nearUserSection = MAINSECTIONSPOSITION[0].key;

  MAINSECTIONSPOSITION.forEach(sectionPosition => {
    let userScroll = window.scrollY;

    if (userScroll >= sectionPosition.value) {
      nearUserSection = sectionPosition.key;
    }
  });

  let currentSectedNav = document.querySelector('.navigation__link_active');
  let currenSectedNavValue = getNavLinkValue(currentSectedNav);

  if (currenSectedNavValue !== nearUserSection) {
    removeSelectedNav();

    let nav = getNavLinkByValue(nearUserSection);
    selectNav(nav);
  }
}

const initMainSectionsPosition = () => {
  var navLinks = getNavLinks();

  navLinks.forEach(navLink => {
    let sectionOffset = document.querySelector(navLink).offsetTop;
    console.log(sectionOffset - 50);
    MAINSECTIONSPOSITION.push({
      key: navLink,
      value: sectionOffset - 50
    });
  });

  MAINSECTIONSPOSITION.sort(function (a, b) {
    return a[1] - b[1];
  });
}

const getNavLinks = () => {
  let navLinks = document.querySelectorAll('.navigation__link');

  let links = [...navLinks].map(navLink => {
    return getNavLinkValue(navLink);
  });

  return links;
}

const getNavLinkValue = (navLink) => {
  return navLink.attributes.href.value;
}

const getNavLinkByValue = (value) => {
  let navLinks = document.querySelectorAll(".navigation__link")

  let navLink = [...navLinks].filter(el => {
    return value === getNavLinkValue(el);
  })[0];

  return navLink;
}