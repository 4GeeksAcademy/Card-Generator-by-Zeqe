/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function getRandomCard() {
    const suits = ["♠", "♥", "♦", "♣"];
    const values = [
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
      "K",
      "A"
    ];

    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];

    // Seleccionar los elementos del DOM
    const topSuit = document.getElementById("top-suit");
    const bottomSuit = document.getElementById("bottom-suit");
    const cardValue = document.getElementById("card-value");

    // Asignar los valores
    topSuit.innerHTML = randomSuit;
    bottomSuit.innerHTML = randomSuit;
    cardValue.innerHTML = randomValue;

    // Si la carta es ♥ o ♦, se les aplica la clase "red"
    if (randomSuit === "♥" || randomSuit === "♦") {
      topSuit.classList.add("red");
      bottomSuit.classList.add("red");
      cardValue.classList.add("red");
    } else {
      topSuit.classList.remove("red");
      bottomSuit.classList.remove("red");
      cardValue.classList.remove("red");
    }
  }

  // Llamar a la función para mostrar una carta cuando se cargue la página
  getRandomCard();
};
