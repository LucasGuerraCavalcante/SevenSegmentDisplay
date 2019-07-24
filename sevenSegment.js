
function displayOff() {
    clear();
    document.getElementById("display").inputMode = sevenSergment();
}

listNumbers = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B]
index = 0

function displayNumber() {
    clear();
    var opt = selNumber.options[selNumber.selectedIndex].text;
    if (opt == "0") {
        index = 0
        document.getElementById("display").inputMode = sevenSergment(0x7E);
    } else if (opt == "1") {
        index = 1
        document.getElementById("display").inputMode = sevenSergment(0x30);
    }  else if (opt == "2") {
        index = 2
        document.getElementById("display").inputMode = sevenSergment(0x6D);
    }  else if (opt == "3") {
        index = 3
        document.getElementById("display").inputMode = sevenSergment(0x79);
    }  else if (opt == "4") {
        index = 4
        document.getElementById("display").inputMode = sevenSergment(0x33);
    }  else if (opt == "5") {
        index = 5
        document.getElementById("display").inputMode = sevenSergment(0x5B);
    }  else if (opt == "6") {
        index = 6
        document.getElementById("display").inputMode = sevenSergment(0x5F);
    }  else if (opt == "7") {
        index = 7
        document.getElementById("display").inputMode = sevenSergment(0x70);
    }  else if (opt == "8") {
        index = 8
        document.getElementById("display").inputMode = sevenSergment(0x7F);
    }  else if (opt == "9") {
        index = 9
        document.getElementById("display").inputMode = sevenSergment(0x7B);
    } 
}

function countNumbers() {
    clear();
    index = (index + 1) % listNumbers.length
    document.getElementById("display").inputMode = sevenSergment(listNumbers[index]);
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    sevenSergment(val);
}

function getColor(val, shift) {
    let r = 0;
    let g = 255;
    let b = 0;
    let a = 255 * ((val >> shift) & 1);
    return color(r,g,b,a)
}

function sevenSergment(val) {
    // A Segment
    fill(getColor(val, 6));
    rect(60, 20, 78, 18); // (x, y, width, lenght)
    // B Segment
    fill(getColor(val, 5));
    rect(140, 40, 18, 98);
    // C Segment
    fill(getColor(val, 4));
    rect(140, 160, 18, 98);
    // D Segment
    fill(getColor(val, 3));
    rect(60, 260, 78, 18);
    // E Segment
    fill(getColor(val, 2));
    rect(40, 160, 18, 98);
    // F Segment
    fill(getColor(val, 1));
    rect(40, 40, 18, 98);
    // G Segment
    fill(getColor(val, 0));
    rect(60, 140, 78, 18);
    // DP Segment
    fill(getColor(val, 8));
    rect(170, 260, 18, 18);
}