import cards from "./source/cards.js";
import header from "./source/header.js";

const root = document.getElementById("root");
root.innerHTML = `<div>${header}${cards}</div>`;
