export const searchHandler = () => {
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
