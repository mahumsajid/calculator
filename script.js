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
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return 0;
    }

}

function changeDisplay() {

    let answer = document.querySelector(".answer");
    let display = document.querySelector(".display");
    let digits = document.querySelectorAll(".digit");
    let displayAnswer = answer.textContent;

    digits.forEach(digit => {
        digit.addEventListener("click", () => {
            if (displayAnswer === "0" && digit.textContent !== ".") {
                displayAnswer = digit.textContent;
            } else {
                displayAnswer = displayAnswer + digit.textContent;
            }
            answer.textContent = displayAnswer;
        });
    });

    let clear = document.querySelector(".clear");

    clear.addEventListener("click", () => {
        displayAnswer = "0";
        answer.textContent = displayAnswer;
    });

    let operators = document.querySelectorAll(".operator");
    //let num1, num2, op;

    operators.forEach(operator => {
        operator.addEventListener("click", () => {
            num1 = answer.textContent;
            op = operator.textContent;
            displayAnswer = "0";
        });
    });

    let equals = document.querySelector(".equals");

    equals.addEventListener("click", () => {
        num2 = answer.textContent;
        displayAnswer = operate(Number(num1), Number(num2), op);
        answer.textContent = displayAnswer;
    });

}

changeDisplay();