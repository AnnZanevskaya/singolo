const MENU = document.getElementById("menu");

MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('a').forEach(el => el.classList.remove("navigation__link_active"));
  event.target.classList.add("navigation__link_active");
});