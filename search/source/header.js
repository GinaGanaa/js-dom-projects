import { products } from "./data.js";
{
  /* <div class="asd">
      <input type="text" />
      <img src="" alt="" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea quam
        asperiores facere architecto eaque, dolorum perferendis illo ratione
        labore omnis, provident laborum quidem eos tenetur deleniti. Ducimus
        aperiam ex ab.
      </p>
    </div> */
}
//loop erguul
//productuudiin categoryydiig n aguulsan array uusge. ["Electronic","Electronic","Electronic", "Clothing","Electronic"]
//array dotoroh davhatssan elemenuudiig ustgana ["Electronic", "Clothing", "Kitchen"]
//ene array deere loop ergelden Options uudaa uusgeed select ruugee hiij ogno

const search = `<input type="text" placeholder="search"/>`;

export default "";
let category = [];
for (let i = 0; i < products.length; i++) {
  category[i] = products[i].category;
}
console.log(category);
function removeDuplicates(category) {
  return category.filter((item, index) => category.indexOf(item) === index);
}
console.log(removeDuplicates(category));
//odoo category dotor 4n category toi array baigaa
// ter category go html generate hiigeed html ruu gee hiij ogno
const searchBtn = document.querySelector(".searchBtn");

const searchHandler = () => {
  const searchText = document.getElementById("search").value;
  console.log("searchText: ", searchText);
  for (let i = 0; i < products.length; i++) {
    if (products[i].name == searchText) {
      console.log("Found product: ", products[i]);
      const oneProduct = products[i];
      const cardName = `<p class="card_name">${oneProduct.name}</p>`;
      const cardImage = `<img class="card_image" src="${oneProduct.image}" width="120px"/>`;
      const cardDesc = `<p class="card_desc">${oneProduct.description}</p>`;
      const cardPrice = `<p class="card_price">$${oneProduct.price}</p>`;
      let coloredStars = "";
      for (let i = 1; i <= oneProduct.rating; i++) {
        coloredStars =
          coloredStars + '<img src="./images/star-colored.svg" width="20px">';
      }
      let blackStars = "";
      for (let i = 5; i > oneProduct.rating; i--) {
        blackStars =
          blackStars + '<img src="./images/star-black.svg" width="20px">';
      }

      const card = `<div class="card">${cardImage}${cardName}${cardDesc}${cardPrice}
        <div class="stars">
        ${coloredStars}
        ${blackStars}
        </div>
        <button class="card_btn">Buy Now </button>
        </div>`;
      const root = document.getElementById("root");
      root.innerHTML = `<div>${card}</div>`;
    }
  }
};
searchBtn.addEventListener("click", searchHandler);
