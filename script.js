const MAINSECTIONSPOSITION = [];

window.onload = function () {
  initMainSectionsPosition();
  initContactModal();
  
  addNavClickHandler();

  window.addEventListener('scroll', selectNavLinkByScrolling);
}

/* NAV EVENTS */

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
  let userScroll = window.scrollY;

  if (isUserInBottomPosition()) {
    nearUserSection = MAINSECTIONSPOSITION[MAINSECTIONSPOSITION.length - 1].key;
  } else {
    MAINSECTIONSPOSITION.forEach(sectionPosition => {
      if (userScroll >= sectionPosition.value) {
        nearUserSection = sectionPosition.key;
      }
    });
  }

  let currentSectedNav = document.querySelector('.navigation__link_active');
  let currenSectedNavValue = getNavLinkValue(currentSectedNav);

  if (currenSectedNavValue !== nearUserSection) {
    removeSelectedNav();

    let nav = getNavLinkByValue(nearUserSection);
    selectNav(nav);
  }
}

const isUserInBottomPosition = () => {
  const heightBuffer = 10;
  let userPageHeight = window.scrollY + document.documentElement.clientHeight + heightBuffer;
  let pageHeight = document.body.scrollHeight;

  return userPageHeight > pageHeight;
}

const initMainSectionsPosition = () => {
  var navLinks = getNavLinks();

  navLinks.forEach(navLink => {
    let sectionOffset = document.querySelector(navLink).offsetTop;
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

/* MODAL EVENTS */

const initContactModal = () => {
  window.onclick = function (event) {
    if (event.target == document.querySelector(".modal")) {
      closeContactModal();
    }
  }

  addOpenModelHandler();
  addCloseModelHandeler();
}

const addOpenModelHandler = () => {
  document.querySelector(".form").addEventListener('submit', (event) => {
    event.preventDefault();
    fillFormTemplate();
    showContactModal();
  });
}

const addCloseModelHandeler = () => {
  document.querySelector(".modal__confirm").onclick = function () {
    closeContactModal();
  }
}

const fillFormTemplate = () => {
  let subject = document.getElementById("subject").value;
  let description = document.getElementById("details").value;

  if (subject !== "") {
    document.getElementById("modal-subject").innerText = subject;
  }

  if (description !== "") {
    document.getElementById("modal-description").innerText = description;
  }
}

const showContactModal = () => {
  document.querySelector(".modal").style.display = "block";
}

const closeContactModal = () => {
  document.querySelector(".modal").style.display = "none";
  document.querySelector("form").reset();
}