/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let card = document.querySelector(".card");
  let item = document.querySelectorAll("h1")[0];

  let suit = ["heart", "diamond", "spade", "club"];
  let selectsuit = suit[getRndInteger(0, suit.length - 1)];
  let numbers = ["A", "Q", "K", "J", 2, 3, 4, 5, 6, 7, 8, 9, 10];

  card.classList.add(selectsuit);
  item.innerHTML = numbers[getRndInteger(0, numbers.length - 1)];
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
