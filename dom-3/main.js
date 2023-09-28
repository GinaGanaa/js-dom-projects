// function plus() {
//   let number = document.getElementById("number").value;
//   document.getElementById("number").value = Number(number);
// }
// if (button == "+") {
//   number = Number(number);
// }

// document.getElementById("answer").innerHTML = 20;

// let x = 15;
// let => command
// x => variable
// 15 => value
//change the value of the variable

// function test() {
//   console.log("doing something");
//   return "some result";
// }

// function => command
// test => variable
// console.log => function body
// return => function ending command "function return"
// function sum() {
//   const num1 = document.getElementById("number").value;
//   const num2 = document.getElementById("number2").value;
//   const sum = Number(num1) + Number(num2);
//   document.getElementById("answer").innerHTML = sum;
// }

// function subtract() {
//   const num1 = Number(document.getElementById("number").value);
//   const num2 = Number(document.getElementById("number2").value);
//   const diff = num1 - num2;
//   document.getElementById("answer").innerHTML = diff;
// }
// function multi() {
//   const num1 = Number(document.getElementById("number").value);
//   const num2 = Number(document.getElementById("number2").value);
//   const multi = num1 * num2;
//   document.getElementById("answer").innerHTML = multi;
// }
// function division() {
//   const num1 = Number(document.getElementById("number").value);
//   const num2 = Number(document.getElementById("number2").value);
//   const result = num1 / num2;
//   document.getElementById("answer").innerHTML = result;
// }

//ene function buh 4n uildeliig hiideg bolgoh yostoi
function operation(button) {
  let element1 = document.getElementById("number").value;
  let element2 = document.getElementById("number2").value;
  let answer = 0;
  console.log(element1);
  if (button == "+") {
    answer = Number(element1) + Number(element2);
  }
  if (button == "-") {
    answer = Number(element1) - Number(element2);
  }
  if (button == "*") {
    answer = Number(element1) * Number(element2);
  }
  if (button == "/") {
    answer = Number(element1) / Number(element2);
  }
  document.getElementById("answer").innerHTML = answer;
}

// unshih nomoo todorhoiloh ehleh
