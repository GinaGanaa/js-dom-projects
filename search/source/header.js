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
//----------------------------------------------//
let categories = [];
for (let i = 0; i < products.length; i++) {
  categories[i] = products[i].category;
}
function removeDuplicates(incomingData) {
  return incomingData.filter(
    (item, index) => incomingData.indexOf(item) === index
  );
}
categories = removeDuplicates(categories);
let options = "";
for (let i = 0; i < categories.length; i++) {
  options += `<option value="${categories[i].toLowerCase()}">${
    categories[i]
  }</option>`;
}
document.getElementById("category").innerHTML = options;
//------------------------------------------------//
let brands = [];
for (let i = 0; i < products.length; i++) {
  brands[i] = products[i].brand;
}
function removeDuplicateOfBrand(incomingData) {
  return incomingData.filter(
    (item, index) => incomingData.indexOf(item) === index
  );
}
brands = removeDuplicateOfBrand(brands);
let optionsOfBrand = "";
for (let i = 0; i < brands.length; i++) {
  optionsOfBrand += `<option value="${brands[i]}">${brands[i]}</option>`;
}
document.getElementById("brand").innerHTML = optionsOfBrand;

{
  /*       
<option value="science">Science</option>
<option value="technology">Technology</option>
<option value="clothing">Clothing</option>
<option value="foot wear">Foot wear</option> */
}
console.log();
// document.getElementById(
//   "category"
// ).innerHTML = `<option value="science">Science</option>`;

//2 hours of planning can save weeks of work

// altan durem
// yu hiih gej baigaa bilee ?
// tuuniig hiihed yu heregtei ve ?
// ene heregtei zuiliig herhen hiih ve ?

// Brand options generating

//category filtering
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filterFunction(a) {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

//end tegs toonuudiig n yalgaj oldog filter bichigdsen baina
let answer = nums.filter(filterFunction);
//undefined => utga baihgui
//null => hooson
function filterForloop(abc) {
  let evenNums = [];
  let count = 0;
  for (let i = 0; i < abc.length; i++) {
    const truth = filterFunction([i]);
    if (truth) {
      evenNums[count] = abc[i];
      count++;
    }
  }

  return evenNums;
}
let answer1 = filterForloop(nums);
console.log("answer1:", answer1);
console.log("answer:", answer);
// eniig harj oilgoj baigaad. product uudaas "Electronics" gesen category toi productuudiig yalgaj oldog filter bichih

const categoryElement = document.getElementById("category");
categoryElement.addEventListener("change", () => {
  console.log("value: ", categoryElement.value);
});

//brand filtering
//sorting

// console.log(document.getElementById("category").innerHTML);
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
