var oneDiv = document.body.querySelector(".one");
var twoDiv = document.body.querySelector(".two");
var threeDiv = document.body.querySelector(".three");

var numberone = Number(prompt("Choose a number?"));
var operator = prompt("Choose one of the following operations: +, -, *, or /");
var numbertwo = Number(prompt("Choose a second number?"));

if (isNaN(numberone)) {
  oneDiv.innerHTML =
    "What you entered is not a number. Please try again.";
} else if (
  operator != "+" &&
  operator != "-" &&
  operator != "*" &&
  operator != "/"
) {
  twoDiv.innerHTML =
    "What you entered is not an operator. Please choose one of the following: +, -, *, /";
} else if (isNaN(numbertwo)) {
  threeDiv.innerHTML =
    "What you entered is not a number. Please try again.";
} else {
  switch (operator) {
    case "+":
      oneDiv.innerHTML = numberone + numbertwo;
    case "-":
      oneDiv.innerHTML = numberone - numbertwo;
    case "*":
      oneDiv.innerHTML = numberone * numbertwo;
    case "/":
      oneDiv.innerHTML = numberone / numbertwo;
  }
}