let bgColor = "";
let textColor = "";
chrome.storage.local.get(["bgColor"]).then((result) => {
  document.documentElement.style.setProperty(
    "--backgroundColor",
    result.bgColor
  );
});
chrome.storage.local.get(["textColor"]).then((result) => {
  document.documentElement.style.setProperty("--color", result.textColor);
});

const deleteClass = () => {
  const bgImportants = document.querySelectorAll(".bg-white, .bg-light");
  bgImportants.forEach((bgImportant) => {
    bgImportant.classList.remove("bg-white");
    bgImportant.classList.remove("bg-light");
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

deleteClass();
headerFix();

document.addEventListener("scroll", () => {
  deleteClass();
  headerFix();
});
