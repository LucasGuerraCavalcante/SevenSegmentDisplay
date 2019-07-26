function displayOff() {
    clear();
    index = 0
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
    } else if (opt == "2") {
        index = 2
        document.getElementById("display").inputMode = sevenSergment(0x6D);
    } else if (opt == "3") {
        index = 3
        document.getElementById("display").inputMode = sevenSergment(0x79);
    } else if (opt == "4") {
        index = 4
        document.getElementById("display").inputMode = sevenSergment(0x33);
    } else if (opt == "5") {
        index = 5
        document.getElementById("display").inputMode = sevenSergment(0x5B);
    } else if (opt == "6") {
        index = 6
        document.getElementById("display").inputMode = sevenSergment(0x5F);
    } else if (opt == "7") {
        index = 7
        document.getElementById("display").inputMode = sevenSergment(0x70);
    } else if (opt == "8") {
        index = 8
        document.getElementById("display").inputMode = sevenSergment(0x7F);
    } else if (opt == "9") {
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
    var cnv = createCanvas(203, 300);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 3;
    cnv.position(x, y);
}

let r = 0;
let g = 255;
let b = 0;

function changeColor() {
    var opt = selColor.options[selColor.selectedIndex].text;
    if (opt == "Red") {
        r = 255;
        g = 0;
        b = 0;
    } else if (opt == "Blue") {
        r = 0;
        g = 0;
        b = 255;
    } else {
        r = 0;
        g = 255;
        b = 0;
    }
    clear();
    document.getElementById("display").inputMode = sevenSergment(listNumbers[index]);
    return (r, g, b)
}

function getColor(val, shift, r, g, b) {
    let a = 40 + 255 * ((val >> shift) & 1);
    return color(r, g, b, a)
}

function sevenSergment(val) {
    background(0);
    noStroke();
    noFill();
    // A Segment
    fill(getColor(val, 6, r, g, b));
    rect(60, 20, 78, 18, 13); // (x, y, width, lenght, corner)
    // B Segment
    fill(getColor(val, 5, r, g, b));
    rect(140, 40, 18, 98, 13);
    // C Segment
    fill(getColor(val, 4, r, g, b));
    rect(140, 160, 18, 98, 13);
    // D Segment
    fill(getColor(val, 3, r, g, b));
    rect(60, 260, 78, 18, 13);
    // E Segment
    fill(getColor(val, 2, r, g, b));
    rect(40, 160, 18, 98, 13);
    // F Segment
    fill(getColor(val, 1, r, g, b));
    rect(40, 40, 18, 98, 13);
    // G Segment
    fill(getColor(val, 0, r, g, b));
    rect(60, 140, 78, 18, 13);
    // DP Segment
    fill(getColor(val, 8, r, g, b));
    rect(170, 260, 18, 18, 13);
    // Borders
    fill(111);
    rect(0, 0, 5, 300);
    fill(111);
    rect(0, 0, 300, 5);
    fill(111);
    rect(198, 0, 5, 300);
    fill(111);
    rect(0, 295, 300, 5);
}