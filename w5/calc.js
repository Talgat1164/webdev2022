const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const clear = document.getElementById("clear");
const equal = document.getElementById("equal");

let firstOperand = 0;
let secondOperand = 0;

let operator = "";

let result = 0;

console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (e) => {
    if (display.innerHTML == 0) {
      display.innerHTML = "";
    }
    display.innerHTML += e.target.innerHTML;
  });
}

for (let j = 0; j < operators.length; j++) {
  operators[j].addEventListener("click", (e) => {
    if (!firstOperand) {
      firstOperand = Number(display.innerHTML);
      operator = e.target.innerHTML;
      console.log("first operand = ", firstOperand);
      console.log("operator", operator);
      display.innerHTML = "";
    }
  });
}

equal.addEventListener("click", (e) => {
  if (firstOperand && operator) {
    secondOperand = Number(display.innerHTML);
    console.log("second operand = ", secondOperand);
    switch (operator) {
      case "/":
        result = firstOperand / secondOperand;
        break;
      case "*":
        result = firstOperand * secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "+":
        result = firstOperand + secondOperand;
        break;
    }
    console.log("result = ", result);
    display.innerHTML = result;
    firstOperand = 0;
    secondOperand = 0;
    operator = "";
  }
});

clear.addEventListener("click", () => {
  display.innerHTML = "";
  firstOperand = 0;
  secondOperand = 0;
  operator = "";
});
