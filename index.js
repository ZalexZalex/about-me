let num1, oper, num2;

num1 = +prompt("Enter the first number");
oper = prompt("Choose an operation");
num2 = +prompt("Enter the second number");


if (num1 !== num1 || num2 !== num2) {
  alert("Input Error.");
}

if (oper === "/") {
  alert(`Your result is ${num1 / num2}`);
} else if (oper === "*") {
  alert(`Your result is ${num1 * num2}`);
} else if (oper === "-") {
  alert(`Your result is ${num1 - num2}`);
} else if (oper === "+") {
  alert(`Your result is ${num1 + num2}`);
} else {
  alert("This operation is not exist");
}
