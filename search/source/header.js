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
  category = products[i].category;
  console.log(category);
}
