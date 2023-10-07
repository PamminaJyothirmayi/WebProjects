let firstNumberEl = document.getElementById("firstNumber");
let secondNumberEl = document.getElementById("secondNumber");

let userInputEl = document.getElementById("userInput");
let gameResultEl = document.getElementById("gameResult");


function onRestartButton() {
    let firstRandomVal = Math.ceil(Math.random() * 100);
    let secondRandomVal = Math.ceil(Math.random() * 100);

    firstNumberEl.textContent = firstRandomVal;
    secondNumberEl.textContent = secondRandomVal;

    userInputEl.value = "";
    gameResultEl.textContent = "";
}
onRestartButton();

function onCheckButton() {
    if (parseInt(userInputEl.value) === parseInt(firstNumberEl.textContent) + parseInt(secondNumberEl.textContent)) {
        gameResultEl.textContent = "Congratulation! You got it";
        gameResultEl.style.color = "green";
    } else {
        gameResultEl.textContent = "Try Again it!";
        gameResultEl.style.color = "red";
    }

}