import _ from "lodash";

document.getElementById("button1").addEventListener("click", function () {
  const clicChange = document.getElementById("btn");
  clicChange.innerHTML = "It is also called microfrontend!";

  const listItem = ["Acadmind", "The Netninja", "Stifan Grander"];
  const ul = document.getElementById("shoppingList");
  _.forEach(listItem, function (item) {
    const tempItem = document.createElement("li");
    tempItem.innerHTML = item;
    ul.appendChild(tempItem);
  });
});
