import cards from "./source/cards.js";
import { headerDiv, filterByCategory } from "./source/header/index.js";

const root = document.getElementById("root");
root.innerHTML = `<div>${headerDiv}${cards}</div>`;
