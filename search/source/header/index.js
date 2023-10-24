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
// array.sort(compareFunction);
const numbers = [31, 56, 6, 4, 9, 83, 57];
numbers.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log(numbers);
const filtered = numbers.filter((a) => {
  return a % 2 == 0;
});
console.log("filtered:", filtered);

products.sort((prod1, prod2) => {
  return prod1.price - prod2.price;
});
console.log("Sorted products", products);
// push method sudlah ashiglah (ooroo zohioj shine product nemj oruulah)
products.push({
  id: 21,
  name: "Apple airpod",
  image:
    "https://media.kohlsimg.com/is/image/kohls/3596885?wid=600&hei=600&op_sharpen=1",
  description:
    "loaded with features to assist with select hearing needs, from focusing on the voice in front of you in noisy surroundings",
  price: 58.99,
  category: "Clothing",
  brand: "Nike",
  rating: 4.9,
  in_stock: true,
  color: "White",
  weight: "0.1 kg",
  dimensions: {
    length: "N/A",
    width: "N/A",
    height: "N/A",
  },
});

// pop method sudlah ashiglah (neg product iig ustgah).
// products.pop();
// map method sudlah ashigah (product uudiig zovhon ner une tei object bolgoj console.logdoh)

const mapped = products.map((product) => {
  return {
    name: product.name,
    price: product.price,
  };
});
console.log("mapped: ", mapped);

//find products that has more expensive than avarage price
//find most expensive apple brand product
//sort by rating.
//sort by name (you can compare string!)
//filter products that has dimension
// filter products that are in stock
