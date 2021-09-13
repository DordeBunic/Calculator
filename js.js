var firstNumber, operator;

const keys = document.querySelector(".calculator__keys");
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    if (document.getElementById("screen").innerText!='Division by zero!'){
    if (parseFloat(e.target.dataset.action) >= 0)
      numberKey(e.target.dataset.action);
    else if (e.target.dataset.action == ".") commaKey(e.target.dataset.action);
    else if (e.target.dataset.action == "AC") allClear();
    else if (e.target.dataset.action == "CE") clearEntry();
    else if (
      e.target.dataset.action == "equal" &&
      firstNumber != null &&
      operator.length != 0
    )
      getResult(firstNumber, operator);
    else if (document.getElementById("screen").innerText != "Division by zero.")
      setOperator(e.target.dataset.action);
  }
}
});

function numberKey(key) {
  if (parseFloat(key) >= 0) {
    document.getElementById("screen").innerText =
      document.getElementById("screen").innerText + key;
    document.getElementById("AC").innerText = "CE";
    document.getElementById("AC").dataset.action = "CE";
  }
}
function commaKey(key) {
  if (
    document.getElementById("screen").innerText.includes(".") == false &&
    document.getElementById("screen").innerText.length > 0
  )
    document.getElementById("screen").innerText =
      document.getElementById("screen").innerText + key;
}
function allClear() {
  firstNumber = null;
  operator = null;
  document.getElementById("screen").innerText = "";
}

function clearEntry() {
  document.getElementById("screen").innerText = "";
  document.getElementById("AC").innerText = "AC";
  document.getElementById("AC").dataset.action = "AC";
}
function setOperator(operatorValue) {
  firstNumber = parseFloat(document.getElementById("screen").innerText);
  document.getElementById("screen").innerText = "";
  operator = operatorValue;
}
function getResult() {
  secondNumber = parseFloat(document.getElementById("screen").innerText);
  if (operator == "+")
    document.getElementById("screen").innerText =
      parseFloat(firstNumber) + secondNumber;
  else if (operator == "-")
  document.getElementById("screen").innerText= parseFloat(firstNumber) - secondNumber;
  else if (operator == "*")
  document.getElementById("screen").innerText= parseFloat(firstNumber) * secondNumber;
  else if (operator == "/") {
    if (parseFloat(document.getElementById("screen").innerText) != 0 && parseFloat(firstNumber) != 0)
        document.getElementById("screen").innerText= parseFloat(firstNumber) /secondNumber;
     else   document.getElementById("screen").innerText= "Division by zero.";
  }
}
