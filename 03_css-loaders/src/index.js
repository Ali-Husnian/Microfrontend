import _ from "lodash";
import style from "./index.css";
import "./clearButton";

console.log(style);

const btn1 = document.getElementById("button1");
btn1.addEventListener("click", function () {
  const clicChange = document.getElementById("header");
  clicChange.innerHTML = "It is also called microfrontend!";

  const listItem = ["Acadmind", "The Netninja", "Stifan Grander"];
  const ul = document.getElementById("shoppingList");
  _.forEach(listItem, function (item) {
    const tempItem = document.createElement("li");
    tempItem.innerHTML = item;
    ul.appendChild(tempItem);
  });
});

btn1.classList.add([style.button]);
