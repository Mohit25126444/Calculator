function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteChar() {
    var display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
    var display = document.getElementById("display");
    display.value += value;
}

function calculate() {
    var display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
