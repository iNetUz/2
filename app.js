const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const button = document.getElementById("result");

function katta() {
    const result = Math.max(number1.value, number2.value);
    button.innerHTML = result;
}
function kichik() {
    const result = Math.min(number1.value, number2.value);
    button.innerHTML = result;
}
