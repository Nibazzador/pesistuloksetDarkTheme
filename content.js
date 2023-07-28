const BGcolor = "#222";
const color = "#DDD";

document.body.style.backgroundColor = BGcolor;

const changeColors = () => {
  const changes = document.querySelectorAll(
    "#app, .organization-selection, .bg-white, .slidebtn, .slidearea, .organizer-area, .btn, .card, .bg-light, th, tr, td"
  );
  changes.forEach((change) => {
    change.style.backgroundColor = BGcolor;
    change.classList.remove("bg-white");
    change.classList.remove("bg-light");
  });
};

const linkColor = () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.color = color;
  });
};

const headerFix = () => {
  const statTableHeaders = document.querySelectorAll(
    ".sticky-header-cloned-wrapper"
  );
  const pageNavbar = document.querySelector(".navbar-item.secondary");

  if (statTableHeaders) {
    statTableHeaders.forEach((statTableHeader) => {
      statTableHeader.style.top = `${pageNavbar.offsetHeight}px`;
    });
  }
};

changeColors();
linkColor();
headerFix();

document.addEventListener("scroll", () => {
  changeColors();
  linkColor();
  headerFix();
});
