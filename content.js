let bgColor = "";
let textColor = "";
chrome.storage.local.get(["bgColor"]).then((result) => {
  bgColor = result.bgColor;
  if (bgColor === undefined) {
    bgColor = "#123";
  }
  chrome.storage.local.get(["textColor"]).then((result) => {
    textColor = result.textColor;
    if (textColor === undefined) {
      textColor = "#aaa";
    }

    document.body.style.backgroundColor = bgColor;

    const changeBgColors = () => {
      const changes = document.querySelectorAll(
        "#app, .organization-selection, .bg-white, .slidebtn, .slidearea, .organizer-area, .btn, .card, .bg-light, th, td"
      );
      changes.forEach((change) => {
        change.style.backgroundColor = bgColor;
        change.classList.remove("bg-white");
        change.classList.remove("bg-light");
      });
    };

    const changeTextColor = () => {
      const texts = document.querySelectorAll("a, span, p, th, td, .row, h2");
      texts.forEach((text) => {
        text.style.color = textColor;
      });
      const actives = document.querySelectorAll(".selected-date, a.active");
      if (actives[0]) {
        actives.forEach((active) => {
          active.style.color = bgColor;
        });
      }
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

    changeBgColors();
    changeTextColor();
    headerFix();

    document.addEventListener("scroll", () => {
      changeBgColors();
      changeTextColor();
      headerFix();
    });
  });
});
