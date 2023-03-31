/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const cardSuit = ["♥", "♦", "♣", "♠"];
  const cardPack = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomNumberForCardPack = Math.floor(Math.random() * cardPack.length);
  const [seedTop, seedBottom] = document.querySelectorAll(".card-seed");
  const cardNumber = document.querySelector(".card-number");

  cardNumber.innerHTML = cardPack[randomNumberForCardPack];

  let randomNumForCardSuit = Math.floor(Math.random() * cardSuit.length);
  let color =
    cardSuit[randomNumForCardSuit] === "♥" ||
    cardSuit[randomNumForCardSuit] === "♦"
      ? "red"
      : "black";

  seedTop.innerHTML = cardSuit[randomNumForCardSuit];
  seedTop.style.color = color;
  seedBottom.innerHTML = cardSuit[randomNumForCardSuit];
  seedBottom.style.color = color;
};
