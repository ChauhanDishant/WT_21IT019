// const prompt = require("prompt-sync")();
function sum()
{
    let a = parseInt(prompt("Enter the number 1 : "));
    let b = parseInt(prompt("Enter the number 2 : "));

    console.log("Addition is : "+ parseInt(a+b));
    document.getElementById("demo").innerHTML = parseInt(a+b);
}
function sub()
{
    let a = parseInt(prompt("Enter the number 1 : "));
    let b = parseInt(prompt("Enter the number 2 : "));

    console.log("Substraction is : "+parseInt(a-b));
    document.getElementById("demo1").innerHTML = parseInt(a+b);
}
function multiplication()
{
    let a = parseInt(prompt("Enter the number 1 : "));
    let b = parseInt(prompt("Enter the number 2 : "));

    console.log("Multiplication is : "+parseInt(a*b));
    document.getElementById("demo2").innerHTML = parseInt(a+b);
}
function division()
{
    let a = parseInt(prompt("Enter the number 1 : "));
    let b = parseInt(prompt("Enter the number 2 : "));

    console.log("Division is : "+parseInt(a/b));
    document.getElementById("demo3").innerHTML = parseInt(a+b);
}
sum(a,b);