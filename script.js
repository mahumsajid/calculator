function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function countDecimals(number) {
    return number.toString().split(".")[1].length;
}

function divide(num1, num2) {
    
    if (num1 % num2 === 0) {
        return num1 / num2;
    }

    //round decimals
    let decimals = countDecimals(num1 / num2);
    if (decimals > 9) {
        return (num1 / num2).toFixed(9);
    } 
    return num1 / num2;
}

function checkLength(number) {
    return (number.toString().length > 12);
}

function operate(num1, num2, operator) {
    
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "−":
            return subtract(num1, num2);
        case "x":
            return multiply(num1, num2);
        case "÷":
            return divide(num1, num2);
        default:
            return 0;
    }

}

function changeDisplay() {

    let num1, num2, op;
    let answer = document.querySelector(".answer");
    let digits = document.querySelectorAll(".digit");

    //allows for the display to keep the old value on screen
    //while displayAnswer is being updated
    let displayAnswer = answer.textContent;

    //allows for only pairs of numbers to be evaluated
    let pairs = false;

    //one period per number at a time
    let onePeriod = false;

    //checks how many characters in display to avoid going over
    let countNum = 0;
    
    digits.forEach(digit => {
        digit.addEventListener("click", () => {
            if (countNum < 10) {
                if (displayAnswer === "0" && digit.textContent !== ".") {
                    displayAnswer = digit.textContent;
                } else {
                    displayAnswer = displayAnswer + digit.textContent;
                }
                answer.textContent = displayAnswer;
                pairs = true;
                countNum++;
            }
        });
    });

    let clear = document.querySelector(".clear");

    clear.addEventListener("click", () => {
        displayAnswer = "0";
        answer.textContent = displayAnswer;
        num1 = null;
        num2 = null;
        op = null;
        pairs = false;
        onePeriod = false;
        countNum = 0;
    });

    let operators = document.querySelectorAll(".operator");

    operators.forEach(operator => {
        operator.addEventListener("click", () => {

            if (op != null && pairs) {
                num2 = answer.textContent;
                num1 = operate(Number(num1), Number(num2), op);
                if (checkLength(num1)) {
                    answer.textContent = "LARGE";
                } else {
                    answer.textContent = num1;
                }
            } else {
                num1 = answer.textContent;
            }

            op = operator.textContent;
            pairs = false;
            onePeriod = false;
            countNum = 0;
            displayAnswer = "0";
        });
    });

    let equals = document.querySelector(".equals");

    equals.addEventListener("click", () => {
        num2 = answer.textContent;

        if (op != null && pairs) {
            if (num2 === "0" && op === "÷") {
                answer.textContent = "ERROR";
            } else {
                displayAnswer = operate(Number(num1), Number(num2), op);
                if (checkLength(displayAnswer)) {
                    answer.textContent = "LARGE";
                } else {
                    answer.textContent = displayAnswer;
                }
            }
            displayAnswer = "0";
            op = null;
            onePeriod = false;
            countNum = 0;
        }
    });

    let period = document.querySelector(".period");

    period.addEventListener("click", () => {
        if(!onePeriod) {
            displayAnswer = displayAnswer + period.textContent;
            answer.textContent = displayAnswer;
            onePeriod = true;
            countNum++;
        }
    });

}

changeDisplay();