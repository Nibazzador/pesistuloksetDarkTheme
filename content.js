let bgColor = "";
let textColor = "";
chrome.storage.local.get(["bgColor"]).then((result) => {
  bgColor = result.bgColor;
  chrome.storage.local.get(["textColor"]).then((result) => {
    textColor = result.textColor;

    document.body.style.backgroundColor = bgColor;

    const changeBgColors = () => {
      const changes = document.querySelectorAll(
        "#app, .organization-selection, .bg-white, .slidebtn, .slidearea, .organizer-area, .btn, .card, .bg-light, th, tr, td"
      );
      changes.forEach((change) => {
        change.style.backgroundColor = bgColor;
        change.classList.remove("bg-white");
        change.classList.remove("bg-light");
      });
    };

    const changeTextColor = () => {
      const links = document.querySelectorAll("a, button span, .slidebtn p");
      links.forEach((link) => {
        link.style.color = textColor;
      });
      const selectedDate = document.querySelector(".selected-date");
      if (selectedDate) {
        selectedDate.style.color = bgColor;
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
