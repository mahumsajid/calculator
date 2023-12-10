function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

let num1, num2, operator;

function operate(num1, num2, operator) {
    
    switch (operator) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "x":
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
            break;
    }

}

function getAnswer() {

    let answer = document.querySelector(".answer");
    let display = document.querySelector(".display");
    let digits = document.querySelectorAll(".digit");
    //let displayAnswer = answer.textContent;

    digits.forEach(digit => {
        digit.addEventListener("click", event => {
            if (answer.textContent === "0" && digit.textContent !== ".") {
                answer.textContent = digit.textContent;
            } else {
                answer.textContent = answer.textContent + digit.textContent;
            }
        });
    });

}

getAnswer();