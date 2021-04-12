const deckCards = ["speedcola.png", "speedcola.png", "revive.png", "revive.png", "phd.png", "phd.png", "mulekick.png", "mulekick.png", "tombstone.png", "tombstone.png", "staminup.png", "staminup.png", "juggernog.png", "juggernog.png", "doubletap.png", "doubletap.png"];

const deck = document.querySelector(".deck");
let opened = [];
let matched = [];
const modal = document.getElementById("modal");
const reset = document.querySelector(".reset-btn");
const playAgain = document.querySelector(".play-again-btn");