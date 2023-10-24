import { products } from "../data.js";
import { genereateCategoryOptions, generateBrandOptions } from "./dropdowns.js";
import { searchHandler } from "./search.js";

//------------------ category options----------------------------//
const categoryOptions = genereateCategoryOptions(products);
const brandOptions = generateBrandOptions(products);

export const filterByCategory = (val) => {
  console.log("val");
  // let filteredProducts = products.filter(
  //   (product) => product.category == "Electronics"
  // );
  // console.log("filteredProducts", filteredProducts);
};

const categry = document.querySelector("#category");
if (categry) {
  categry.addEventListener("onchange", () => {
    console.log("changing");
  });
}
export const headerDiv = `<div class="header">
      <div>
        <input id="search" class="search" type="text" placeholder="Search" />
        <button class="searchBtn">search</button>
      </div>
      <div>
        <select class="select" name="category" id="category" onchange="filterByCategory(this)" >${categoryOptions}</select>
        <select class="select" name="brand" id="brand">${brandOptions}</select>
        <select class="select" name="sort" id="sort">
          <option value="by rating">By Rating</option>
          <option value="by price">By Price</option>
        </select>
      </div>
</div>`;

//----------------------------------//
// const categoryElement = document.getElementById("category");
// categoryElement.addEventListener("change", () => {
//   console.log("value: ", categoryElement.value);
// });

//brand filtering,
//sorting

// console.log(document.getElementById("category").innerHTML);
//odoo category dotor 4n category toi array baigaa
// ter category go html generate hiigeed html ruu gee hiij ogno

// const searchBtn = document.querySelector(".searchBtn");

// searchBtn.addEventListener("click", searchHandler);

// filter method uzsen (filterleed zarim productuudiig avch chadsan)
// sort method sudlah ashiglah (products iig uneer n sortloj console logdono)
// push method sudlah ashiglah (ooroo zohioj shine product nemj oruulah)
// pop method sudlah ashiglah (neg product iig ustgah).
// map method sudlah ashigah (product uudiig zovhon ner une tei object bolgoj console.logdoh)
array.sort(compareFunction);
const numbers = [31, 56, 6, 4, 9, 83, 57];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
