import { products } from "./data.js";
const oneProduct = products[0];

const root = document.getElementById("root");
const cardName = `<p class="card_name">${oneProduct.name}</p>`;
const cardImage = `<img class="card_image" src="${oneProduct.image}" width="120px"/>`;
const cardDesc = `<p class="card_desc">${oneProduct.description}</p>`;
const cardPrice = `<p class="card_price">$${oneProduct.price}</p>`;
let coloredStars = "";
for (let i = 1; i <= oneProduct.rating; i++) {
  coloredStars =
    coloredStars + '<img src="./images/star-colored.svg"/ width="20px">';
}
let blackStars = "";
for (let i = 5; i > oneProduct.rating; i--) {
  blackStars = blackStars + '<img src="./images/star-black.svg"/ width="20px">';
}
//black stars uudiig gargaj ireh
//loop

// const num = 5;
// let hellos = "";
// for (let i = 1; i <= num; i++) {
//   hellos = hellos + "Hello";
// }
// console.log(hellos);

const card = `<div class="card">
${cardImage}
${cardName}
${cardDesc}
${cardPrice}
<div class="stars">
${coloredStars}
${blackStars}
</div>
<button class="card_btn">Buy Now </button>
</div>`;

root.innerHTML = card;
