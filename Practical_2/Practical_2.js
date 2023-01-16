// const prompt = require("prompt-sync")();
function sum() {
    let a = parseInt(prompt("Enter the number 1 : "));
    let b = parseInt(prompt("Enter the number 2 : "));

    console.log("Addition is : " + parseInt(a + b));
    document.getElementById("demo").innerHTML = parseInt(a + b);
}
function sub() {
    let a = parseInt(prompt("Enter the number 1 : "));
    let b = parseInt(prompt("Enter the number 2 : "));

    console.log("Substraction is : " + parseInt(a - b));
    document.getElementById("demo1").innerHTML = parseInt(a - b);
}
function multiplication() {
    let a = parseInt(prompt("Enter the number 1 : "));
    let b = parseInt(prompt("Enter the number 2 : "));

    console.log("Multiplication is : " + parseInt(a * b));
    document.getElementById("demo2").innerHTML = parseInt(a * b);
}
function division() {
    let a = parseInt(prompt("Enter the number 1 : "));
    let b = parseInt(prompt("Enter the number 2 : "));

    console.log("Division is : " + parseInt(a / b));
    if (a > b)
        document.getElementById("demo3").innerHTML = parseInt(a / b);
    else
        document.getElementById("demo3").innerHTML = parseInt(b / a);
}
function get(y) {
     let p = parseInt(document.getElementById("val1").value);
    let q = parseInt(document.getElementById("val2").value);
    let r = 0
    if (y == "sum") {
        r = sum(p, q);
        console.log("sum")
    }
    else if (y == "sub") {
        r = sub(p, q);
        console.log("sub")
    }
    else if (y == "multi") {
        r = multi(p, q);
        console.log("multi")
    }
    else if (y == "div") {
        r = div(p, q);
        console.log("div")
    }
    document.getElementById("demo2").innerHTML = "Answer is: " + r;
}

function sum(p1, p2) {
    let sm = p1 + p2;
    return sm
}

function sub(p1, p2) {
    let sm = p1 - p2;
    return sm
}

function multi(p1, p2) {
    let sm = p1 * p2;
    return sm
}

function div(p1, p2) {
    let sm = p1 / p2;
    return sm;
}
