// ==========================================
// CALCULATOR
// ==========================================

// Calculator values
let currentOperand = "";
let previousOperand = "";
let operation = undefined;


// ==========================================
// HTML ELEMENTS
// ==========================================

const currentOperandElement =
    document.getElementById("currentOperand");

const previousOperandElement =
    document.getElementById("previousOperand");

const numberButtons =
    document.querySelectorAll("[data-number]");

const operationButtons =
    document.querySelectorAll("[data-operation]");

const clearButton =
    document.querySelector("[data-action='clear']");

const deleteButton =
    document.querySelector("[data-action='delete']");

const equalsButton =
    document.querySelector("[data-action='equals']");

const percentButton =
    document.querySelector("[data-action='percent']");


// ==========================================
// ADD NUMBER
// ==========================================

function appendNumber(number) {

    // Don't allow more than one decimal point
    if (
        number === "." &&
        currentOperand.includes(".")
    ) {
        return;
    }

    currentOperand += number;

    updateDisplay();
}


// ==========================================
// SELECT OPERATION
// ==========================================

function chooseOperation(selectedOperation) {

    // Don't allow operation without a number
    if (currentOperand === "") {
        return;
    }


    // If an operation already exists,
    // calculate the previous operation first
    if (previousOperand !== "") {
        calculate();
    }


    operation = selectedOperation;

    previousOperand = currentOperand;

    currentOperand = "";

    updateDisplay();
}


// ==========================================
// CALCULATE
// ==========================================

function calculate() {

    if (
        previousOperand === "" ||
        currentOperand === "" ||
        operation === undefined
    ) {
        return;
    }


    const previous =
        parseFloat(previousOperand);

    const current =
        parseFloat(currentOperand);

    let result;


    switch (operation) {

        case "+":

            result = previous + current;

            break;


        case "-":

            result = previous - current;

            break;


        case "*":

            result = previous * current;

            break;


        case "/":

            if (current === 0) {

                alert("Cannot divide by zero.");

                clearCalculator();

                return;
            }

            result = previous / current;

            break;


        default:

            return;
    }


    // Remove unnecessary floating-point errors
    result = parseFloat(result.toFixed(10));


    currentOperand = result.toString();

    previousOperand = "";

    operation = undefined;

    updateDisplay();
}


// ==========================================
// PERCENTAGE
// ==========================================

function calculatePercentage() {

    if (currentOperand === "") {
        return;
    }


    const number =
        parseFloat(currentOperand);


    const result =
        number / 100;


    currentOperand =
        result.toString();


    updateDisplay();
}


// ==========================================
// CLEAR CALCULATOR
// ==========================================

function clearCalculator() {

    currentOperand = "";

    previousOperand = "";

    operation = undefined;

    updateDisplay();
}


// ==========================================
// DELETE LAST CHARACTER
// ==========================================

function deleteNumber() {

    currentOperand =
        currentOperand.slice(0, -1);

    updateDisplay();
}


// ==========================================
// UPDATE DISPLAY
// ==========================================

function updateDisplay() {

    // Current number
    currentOperandElement.textContent =
        currentOperand || "0";


    // Previous number + operation
    if (operation !== undefined) {

        previousOperandElement.textContent =
            `${previousOperand} ${getOperationSymbol(operation)}`;

    } else {

        previousOperandElement.textContent =
            "";

    }
}


// ==========================================
// OPERATION SYMBOL
// ==========================================

function getOperationSymbol(operation) {

    switch (operation) {

        case "+":

            return "+";


        case "-":

            return "−";


        case "*":

            return "×";


        case "/":

            return "÷";


        default:

            return "";
    }
}


// ==========================================
// NUMBER BUTTON EVENTS
// ==========================================

numberButtons.forEach(button => {

    button.addEventListener("click", () => {

        const number =
            button.dataset.number;

        appendNumber(number);

    });

});


// ==========================================
// OPERATION BUTTON EVENTS
// ==========================================

operationButtons.forEach(button => {

    button.addEventListener("click", () => {

        const selectedOperation =
            button.dataset.operation;

        chooseOperation(selectedOperation);

    });

});


// ==========================================
// EQUALS BUTTON
// ==========================================

equalsButton.addEventListener(
    "click",
    calculate
);


// ==========================================
// CLEAR BUTTON
// ==========================================

clearButton.addEventListener(
    "click",
    clearCalculator
);


// ==========================================
// DELETE BUTTON
// ==========================================

deleteButton.addEventListener(
    "click",
    deleteNumber
);


// ==========================================
// PERCENTAGE BUTTON
// ==========================================

percentButton.addEventListener(
    "click",
    calculatePercentage
);


// ==========================================
// KEYBOARD SUPPORT
// ==========================================

document.addEventListener("keydown", event => {


    // ------------------------------
    // Numbers
    // ------------------------------

    if (
        event.key >= "0" &&
        event.key <= "9"
    ) {

        appendNumber(event.key);

    }


    // ------------------------------
    // Decimal
    // ------------------------------

    if (event.key === ".") {

        appendNumber(".");

    }


    // ------------------------------
    // Operations
    // ------------------------------

    if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/"
    ) {

        chooseOperation(event.key);

    }


    // ------------------------------
    // Enter / Equals
    // ------------------------------

    if (
        event.key === "Enter" ||
        event.key === "="
    ) {

        event.preventDefault();

        calculate();

    }


    // ------------------------------
    // Backspace
    // ------------------------------

    if (event.key === "Backspace") {

        deleteNumber();

    }


    // ------------------------------
    // Escape
    // ------------------------------

    if (event.key === "Escape") {

        clearCalculator();

    }


    // ------------------------------
    // Percentage
    // ------------------------------

    if (event.key === "%") {

        calculatePercentage();

    }

});


// ==========================================
// INITIAL DISPLAY
// ==========================================

updateDisplay();