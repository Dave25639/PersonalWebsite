var style = true;
function changeStyle() {
  if (style) {
    document.getElementById("css").setAttribute("href", "styles/light.css");
    style = false;
  } else {
    document.getElementById("css").setAttribute("href", "styles/dark.css");
    style = true;
  }
}

function textTypingEffect(element, text, i = 0) {
  var str = element.textContent;
  element.textContent = str.slice(0, i) + text[i] + str.slice(i);
  if (i === text.length - 1) {
    idleCursorEffect(element, text);
    return;
  }

  setTimeout(() => textTypingEffect(element, text, i + 1), 50);
}

function idleCursorEffect(element, text, swap = false) {
  element.textContent = element.textContent.slice(
    0,
    element.textContent.length - 1
  );
  document.getElementById("title").setAttribute("class", "blinking-cursor");
}

function typeEffect(target_name, input_text) {
  const target = document.getElementById(target_name);
  textTypingEffect(target, text);
}

function textMainTitle() {
  const title = document.getElementById("title");
  const text = "david tanase";
  textTypingEffect(title, text);
}

function lightMode() {
  localStorage.setItem("style", "styles/light.css");
  load_style();
}

function darkMode() {
  localStorage.setItem("style", "styles/dark.css");
  load_style();
}

function load_style() {
  document
    .getElementById("css")
    .setAttribute("href", localStorage.getItem("style"));
}

function onToggleChange(checkbox) {
  if (checkbox.checked) {
    lightMode();
  } else {
    darkMode();
  }
}

load_style();
