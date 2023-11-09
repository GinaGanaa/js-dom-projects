// altan durem.
// yu hiih gej baigaa bilee ?
// tuuniig hiihed yu heregtei ve ?
// ene heregtei zuiliig herhen hiih ve ?

//category filtering
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filterFunction(a) {
  if (a % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

//end tegsh toonuudiig n yalgaj oldog filter bichigdsen baina
let answer = nums.filter(filterFunction);
//undefined => utga baihgui
//null => hooson
function filterForloop(abc) {
  let evenNums = [];
  let count = 0;
  for (let i = 0; i < abc.length; i++) {
    const truth = filterFunction(abc[i]);
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

function filterFunc(product) {
  if (product.category == "Electronics") {
    return true;
  } else {
    return false;
  }
}
let answer2 = products.filter(filterFunc);
function filterLoop(product) {
  let categories = [];
  let count = 0;
  for (let i = 0; i < product.length; i++) {
    const truth = filterFunc(product[i]);
    if (truth) {
      categories[count] = product[i];
      count++;
    }
  }
  return categories;
}
