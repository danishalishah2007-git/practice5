
const display = document.getElementById("display");

function appendtodisplay(input) {

    if (input === '=') {
        calculate();
    }
    else if (input === 'c' || input === 'C') {
        cleardisplay();
    }
    else {
        display.value += input;
    }
}

function cleardisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}
