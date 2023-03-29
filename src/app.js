/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const cardSuit = ["♥", "♦", "♣", "♠"];
  const cardOther = ["A", "J", "Q", "K"];

  let randomNumber = Math.floor(Math.random() * 13) + 1;
  let cardSeeds = document.querySelectorAll(".card-seed");
  let cardNumber = document.querySelector(".card-number");

  if (randomNumber == 1) {
    cardNumber.innerHTML = cardOther[0];
  } else if (randomNumber == 11) {
    cardNumber.innerHTML = cardOther[1];
  } else if (randomNumber == 12) {
    cardNumber.innerHTML = cardOther[2];
  } else if (randomNumber == 13) {
    cardNumber.innerHTML = cardOther[3];
  } else cardNumber.innerHTML = randomNumber;

  let randomNum = Math.floor(Math.random() * cardSuit.length);
  cardSeeds[0].innerHTML = cardSuit[randomNum];
  cardSeeds[1].innerHTML = cardSuit[randomNum];
};
