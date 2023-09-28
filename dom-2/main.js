// function increase() {
//   let number = document.getElementById("number").innerHTML;
//   document.getElementById("number").innerHTML = Number(number) + 1;
// }
// function decrease() {
//   let number = document.getElementById("number").innerHTML;
//   document.getElementById("number").innerHTML = Number(number) - 1;
// }
// function increase10() {
//   let number = document.getElementById("number").innerHTML;
//   document.getElementById("number").innerHTML = Number(number) + 10;
// }
// function decrease10() {
//   let number = document.getElementById("number").innerHTML;
//   document.getElementById("number").innerHTML = Number(number) - 10;
// }

//modify this function so that it will increase or decrease the number by 1 or 10 and
function changeNumber(button) {
  let elementNumber = document.getElementById("number").innerHTML;
  if (button == "+") {
    elementNumber = Number(elementNumber) + 1;
  }
  if (button == "-") {
    elementNumber = Number(elementNumber) - 1;
  }
  if (button == "+10") {
    elementNumber = Number(elementNumber) + 10;
  }
  if (button == "-10") {
    elementNumber = Number(elementNumber) - 10;
  }
  document.getElementById("number").innerHTML = elementNumber;
}

// function black() {
//   document.body.style.backgroundColor = "black";
// }
// function yellow() {
//   document.body.style.backgroundColor = "yellow";
// }
// function green() {
//   document.body.style.backgroundColor = "green";
// }
// function red() {
//   document.body.style.backgroundColor = "red";
// }
// add another 2 button that decrease and increase by 10
// background ong oorchilog tovch zohion butee

// function changeNumber(change) {
//   let element = document.getElementById("number");
//   element.innerHTML = Number(number.innerHTML) + Number(change);
// }
// shine project uusgii
// tendee tonii mashin hiiy
// 2 input tei baina, 4 tovchluurtai baina
//  ___________   ___________
// |   10      | |   20      | //ed nar zaaval input baina
//  -----------   -----------
//  ___ ___ ___ ___
// | + | - | * | / | //ed nar zaaval button baina
// |___|___|___|___|
//           ___________
// answer:  |   200     |  // ene paragraph baij bolno
//          |___________|

//home work 2: simple-form iig ajilgaand oruulj console.log deer hereglegchiin oruulsan buh data g gargaj irdeg bolgoh
