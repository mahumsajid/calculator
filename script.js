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
    let decimals = countDecimals(number);
    if (decimals > 9) {
        return number.toFixed(9);
    } 
    return num1 / num2;
}

function checkLength(number) {
    
    return (number.toString().length > 10);
}

let num1, num2, op;

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

    let answer = document.querySelector(".answer");
    let digits = document.querySelectorAll(".digit");
    let period = document.querySelector(".period");
    let displayAnswer = answer.textContent;
    let pairs = false;
    let onePeriod = false;
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
                console.log(checkLength(num1), num1.length);
                if(checkLength(num1)) {
                    answer.textContent = "LARGE";
                } else {
                    answer.textContent = num1;
                }
                onePeriod = false;
            } else {
                num1 = answer.textContent;
            }

            op = operator.textContent;
            pairs = false;
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
        }
    });


    period.addEventListener("click", () => {
        if(!onePeriod) {
            displayAnswer = displayAnswer + period.textContent;
            answer.textContent = displayAnswer;
            onePeriod = true;
        }
    });

}

changeDisplay();