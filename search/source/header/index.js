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
const result = [[2, 3, 4], 2, 3].filter((val) => {
  console.log("val:", val);
  return true;
});
console.log(result);

function customFilter(nums) {
  let evenNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (innerFunction(nums[i])) {
      evenNums.push(nums[i]);
    }
  }
  return evenNums;
}
const innerFunction = (val) => {
  return val % 2 == 0;
};
const result1 = customFilter([31, 56, 6, 4, 9, 83, 57]);
console.log(result1);

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

// const mapped = products.map((product) => {
//   let sum = 0;
//   sum += product.price;
//   return {
//     price: sum / products.lenght,
//   };
// });
// console.log("mapped: ", mapped);
//-------------------//
//find products that is more expensive than average price
let sum = 0;
products.map((product) => {
  sum += product.price;
});
console.log("proPrices: ", sum);
let avgPrice1 = 0;
avgPrice1 = sum / products.length;
console.log("Average price of products", avgPrice1);
let expensivePro = [];
products.map((product) => {
  if (product.price > avgPrice1) {
    expensivePro.push(product);
  }
});
console.log("Expensive products than average price", expensivePro);

// map ergeed unenuudiig n olno olson unneesee avg olno
// let avg = ?
products.filter((product) => {
  //avg ees untei yu?
});

// function avgPrice(productPrice) {
//   let count = 0;
//   let avgPriceOfPros = 0;
//   for (let i = 0; i < productPrice.length; i++) {
//     count += products[i].price;
//   }
//   avgPriceOfPros = count / products.length;
//   return avgPriceOfPros;
// }
// let answer = avgPrice(products);
// console.log("the answer is", answer);

//find most expensive apple brand product //!!!!
const theAnswer = products.sort((product, product1) => {
  if (product.price > product1.price) {
    return -1;
  } else {
    return 1;
  }
});
console.log("The most expensive one is", theAnswer);
//sort by rating.
const ratedProducts = products.sort((firstPro, nextPro) => {
  if (firstPro.rating >= nextPro.rating) {
    return -1;
  } else {
    return 1;
  }
});
console.log("rated products", ratedProducts);

//sort by name (you can compare string!)
const productsName = products.sort((firstProName, nextProName) => {
  if (firstProName.name > nextProName.name) {
    return 1;
  } else {
    return -1;
  }
});
console.log("The products by name", productsName);
//filter products that has dimension
const dimenisonPros = products.filter((product) => {
  return product.dimensions.length != "N/A";
  // if (product.dimensions.length == "N/A") {
  //   return false;
  // } else {
  //   return true;
  // }
});
console.log("products with dimensions", dimenisonPros);
//filter products that are in stock
const inStockPros = products.filter((inStockProducts) => {
  return inStockProducts.in_stock == true;
});
console.log("In stock Products", inStockPros);

let arr = [1, 2, 3, 4];
let mapped1 = arr.map((a) => {
  return "abc";
});
console.log(mapped1);

arr.sort((a, b) => {
  return -1;
});
console.log("arr", arr);
let filtered1 = arr.filter((a) => {
  return true;
});
console.log(filtered1);
