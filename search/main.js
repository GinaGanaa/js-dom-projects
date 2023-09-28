import { products } from "./data.js";
const oneProduct = products[0];

// const data = {age: 15}
// const => command
// data => variable
// {age: 15} => data giin value
// age => property
// 15 => property giin value

//selecting div with cards class
const byQuerySelector = document.querySelector(".cards");

const title = `<h2 class="product_title">${oneProduct.name}</h2>`;
const image = `<img class="card_image" src="${oneProduct.image}" alt=""/>`;
const price = `<p class="product_price">${oneProduct.price}$</p>`;
const card = `<div class="card">${title}${image}${price}</div>`;

//adding card element to the div with class cards
byQuerySelector.innerHTML = card;

//
