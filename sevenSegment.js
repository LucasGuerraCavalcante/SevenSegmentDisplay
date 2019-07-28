
// List (Array) with all hexadecimal codes related to each number to display (0 to 9 in order)
listNumbers = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x70, 0x7F, 0x7B]
// Inital index
index = 0

// Initial RGB code when load the page styles and the display (Light Green)
let r = 0;
let g = 255;
let b = 0;

// Function to change those colors
function changeColor() {
    // To see which color did the user selected
    var opt = selColor.options[selColor.selectedIndex].text;
    if (opt == "Red") {
        // Changing the RGB display 
        r = 255;
        g = 0;
        b = 0;
        // To see which color did the user selected
        document.getElementById("selColor").className = "redSelect";
        document.getElementById("selNumber").className = "redSelect";
        document.getElementById("buttonDisplay").className = "redSelect";
        document.getElementById("buttonCount").className = "redSelect";
        document.getElementById("buttonAnimete").className = "redSelect";
        document.getElementById("buttonTurnOff").className = "redSelect";
        document.getElementById("buttonChangeColor").className = "redSelect";
        document.getElementById("footerText").className = "redFooterText";
        document.getElementById("title").className = "redTitle";
    } else if (opt == "Blue") {
        r = 0;
        g = 0;
        b = 255;
        document.getElementById("selColor").className = "blueSelect";
        document.getElementById("selNumber").className = "blueSelect";
        document.getElementById("buttonDisplay").className = "blueSelect";
        document.getElementById("buttonCount").className = "blueSelect";
        document.getElementById("buttonAnimete").className = "blueSelect";
        document.getElementById("buttonTurnOff").className = "blueSelect";
        document.getElementById("buttonChangeColor").className = "blueSelect";
        document.getElementById("footerText").className = "blueFooterText";
        document.getElementById("title").className = "blueTitle";
        
    } else if (opt == "Green"){
        r = 0;
        g = 255;
        b = 0;
        document.getElementById("selColor").className = "greenSelect";
        document.getElementById("selNumber").className = "greenSelect";
        document.getElementById("buttonDisplay").className = "greenSelect";
        document.getElementById("buttonCount").className = "greenSelect";
        document.getElementById("buttonAnimete").className = "greenSelect";
        document.getElementById("buttonTurnOff").className = "greenSelect";
        document.getElementById("buttonChangeColor").className = "greenSelect";
        document.getElementById("footerText").className = "greenFooterText";
        document.getElementById("title").className = "greenTitle";
    }
    clear();
    document.getElementById("display").inputMode = sevenSergment(listNumbers[index]);
    return (r, g, b)
}

function getColor(val, shift, r, g, b) {
    let a = 40 + 255 * ((val >> shift) & 1);
    return color(r, g, b, a)
}

function setup() {
    var cnv = createCanvas(203, 300);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 3;
    cnv.position(x, y);
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
    // Display borders
    fill(111);
    rect(0, 0, 5, 300);
    fill(111);
    rect(0, 0, 300, 5);
    fill(111);
    rect(198, 0, 5, 300);
    fill(111);
    rect(0, 295, 300, 5);
}

// Function to the display the selected number
function displayNumber() {
    clear();
    // To see which number did the user selected
    var opt = selNumber.options[selNumber.selectedIndex].text;
    if (opt == "0") {
        index = 0
        document.getElementByClass("display").inputMode = sevenSergment(0x7E);
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

// Function to display the next number on order when you click the button
function countNumbers() {
    clear();
    // To turn the current index value into the next index value (+1)
    index = (index + 1) % listNumbers.length
    document.getElementById("display").inputMode = sevenSergment(listNumbers[index]);
}

// Function to turn the Display "off"
function displayOff() {
    clear();
    index = 0
    document.getElementById("display").inputMode = sevenSergment();
}
