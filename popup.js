const colorForm = document.getElementById("colorForm");
const bgInput = document.getElementById("bgColor");
const textInput = document.getElementById("textColor");

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
