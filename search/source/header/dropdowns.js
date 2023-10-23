// category options

export function genereateCategoryOptions(products) {
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
  let options = "<option selected>All</option>";
  for (let i = 0; i < categories.length; i++) {
    options += `<option value="${categories[i].toLowerCase()}">${
      categories[i]
    }</option>`;
  }
  return options;
}
export function generateBrandOptions(products) {
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
  let options = "";
  for (let i = 0; i < brands.length; i++) {
    options += `<option value="${brands[i]}">${brands[i]}</option>`;
  }
  return options;
}

//brand options,
