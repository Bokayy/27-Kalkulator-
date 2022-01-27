"use strict"

let userInput = document.getElementById("userInput");
let expression = String();

function press(num){
    expression += num;
    userInput.value = expression;
}

function erase(){
    expression = "";
    userInput.value = expression;
}

function equal(){
    userInput.value = eval(expression);
}