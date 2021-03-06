const MAINSECTIONSPOSITION = [];

window.onload = function () {
  initMainSectionsPosition();
  initContactModal();

  addNavClickHandler();
  addTagsClickHandler();
  addImageClickHandler();

  addPhoneClickHandler();

  window.addEventListener('scroll', selectNavLinkByScrolling);
}

/* NAV EVENTS */

const initMainSectionsPosition = () => {
  const heightBuffer = 50;
  let navLinks = getNavLinks();

  navLinks.forEach(navLink => {
    let sectionOffset = document.querySelector(navLink).offsetTop;
    MAINSECTIONSPOSITION.push({
      key: navLink,
      value: sectionOffset - heightBuffer
    });
  });

  MAINSECTIONSPOSITION.sort(function (a, b) {
    return a[1] - b[1];
  });
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

/* GALLERY EVENTS */

const addTagsClickHandler = () => {
  document.querySelector('.tags').addEventListener('click', (e) => {
    if (e.target.classList.contains('tags__item')) {
      let clickedTag = e.target;

      if (isTagChanged(clickedTag)) {
        removeSelectedTags();
        selectTag(clickedTag);

        shuffleGalleryImages();
      }
    }
  });
}

const addImageClickHandler = () => {
  document.querySelector('.gallery').addEventListener('click', (e) => {
    if (e.target.classList.contains('gallery__image')) {
      let clickedImage = e.target;

      if (isImageChanged(clickedImage)) {
        removeSelectedImage();
        selectImage(clickedImage);
      } else {
        removeSelectedImage();
      }
    }
  });
}

const isImageChanged = (clickedImage) => {
  let activeImage = document.querySelector('.gallery__image_bordered');

  return activeImage !== clickedImage;
}

const removeSelectedImage = () => {
  let images = document.querySelectorAll('.gallery__image');

  images.forEach(image => {
    image.classList.remove('gallery__image_bordered');
  });
}

const selectImage = (clickedImage) => {
  clickedImage.classList.add('gallery__image_bordered');
}

const shuffleGalleryImages = () => {
  let images = document.querySelectorAll('.gallery__image');

  let randomImages = shuffle([...images]);

  let galleryWrapper = getGalleryWrapper();
  randomImages.forEach(image => {
    galleryWrapper.append(image);
  });
}

const getGalleryWrapper = () => {
  const galleryWrapper = document.querySelector('.gallery');
  galleryWrapper.innerHTML = '';
  return galleryWrapper
}

const isTagChanged = (clickedTag) => {
  let activeTag = document.querySelector('.tags__item_active');

  return activeTag !== clickedTag;
}

const removeSelectedTags = () => {
  let tags = document.querySelectorAll('.tags__item');

  tags.forEach(tag => {
    tag.classList.remove('tags__item_active');
  });
}

const selectTag = (clickedTag) => {
  clickedTag.classList.add('tags__item_active');
}

const shuffle = (array) => {
  let currentIndex = array.length,
    temporaryValue, randomIndex;


  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];

    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/* SLIDER ACTIONS */

const addPhoneClickHandler = () => {
  document.querySelectorAll('.phone-base').forEach(el => {
    el.addEventListener('click', (e) => changePhoneState(e.target));
  });

  document.querySelectorAll('.phone-screen').forEach(el => {
    el.addEventListener('click', (e) => changePhoneState(e.target));
  });
}

const changePhoneState = (e) => {
  let phoneElement = e.parentElement;
  let screenElement = phoneElement.querySelector('.phone-screen');

  if (screenElement.classList.contains("hidden"))
    screenElement.classList.remove("hidden");
  else
    screenElement.classList.add("hidden");
}