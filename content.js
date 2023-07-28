const BGcolor = "#222";
const color = "#DDD";
document.body.style.backgroundColor = BGcolor;

const changeColors = () => {
  const divs = document.querySelectorAll("div, th, tr, td");
  divs.forEach((div) => {
    div.style.backgroundColor = BGcolor;
    div.style.color = color;
  });
};

const linkColor = () => {
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.color = color;
  });
};

changeColors();
linkColor();

const targetNode = document.querySelector(".matches");

const config = { attributes: true, childList: true, subtree: true };

const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      const matchDivs = document.querySelectorAll(".bg-light");
      matchDivs.forEach((matchDiv) => {
        matchDiv.classList.remove("bg-light");
        matchDiv.style.backgroundColor = BGcolor;
        matchDiv.style.color = color;
      });
      linkColor();
    }
  }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
