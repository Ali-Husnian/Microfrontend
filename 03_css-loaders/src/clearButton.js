// import style from "./clearButton.css";

const el = document.createElement("button");
el.innerHTML = "Clear";
el.classList.add(["button"]);
// el.classList.add([style.button]);
el.onclick = function () {
  alert("Button Clicked");
};
document.body.appendChild(el);
