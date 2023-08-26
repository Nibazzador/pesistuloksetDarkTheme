const colorForm = document.getElementById("colorForm");
const bgInput = document.getElementById("bgColor");
const textInput = document.getElementById("textColor");

let bgColor = "#123";
let textColor = "#aaa";

chrome.storage.local.get(["bgColor"]).then((result) => {
  bgColor = result.bgColor;
  chrome.storage.local.get(["textColor"]).then((result) => {
    textColor = result.textColor;
    bgInput.value = bgColor;
    textInput.value = textColor;
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
  });
});

colorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const bgValue = bgInput.value.trim();
  const textValue = textInput.value.trim();
  document.body.style.backgroundColor = bgValue;
  document.body.style.color = textValue;
  chrome.storage.local.set({ bgColor: bgValue });
  chrome.storage.local.set({ textColor: textValue });
});

const helpDiv = document.querySelector(".help");
const helpPara = document.querySelector("p");

helpDiv.addEventListener("mouseover", () => {
  helpPara.style.opacity = "1";
  helpPara.style.zIndex = "1";
});
helpDiv.addEventListener("mouseout", () => {
  helpPara.style.opacity = "0";
  helpPara.style.zIndex = "-1";
});
