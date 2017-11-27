/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

 function multiply(x, y){
    return (parseFloat(x) * parseFloat(y));
 }

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add(x, y){
    return (parseFloat(x) + parseFloat(y));
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract(x, y){
    return (parseFloat(x) - parseFloat(y));
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */

function divide(x, y){
    return (parseFloat(x) / parseFloat(y));
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

 function mathmaticalFunction(x, y, func){
     let calculation = func(x, y);
     document.getElementById("output").innerHTML = "<p> The answer is: " + calculation + "</p>";
 }

/*
Checks if input has any value.  If the input does not, replace with 0;
*/

function checkNaN(){
    if(isNaN(parseFloat(document.getElementById("first-number").value))){
        document.getElementById("first-number").value = 0;
    }
    if(isNaN(parseFloat(document.getElementById("second-number").value))){
        document.getElementById("second-number").value = 0;
    }
}
 
/*************
Button on click event listeners
*************/

document.getElementById("add").addEventListener("click", function(){
    checkNaN();
    mathmaticalFunction(document.getElementById("first-number").value, document.getElementById("second-number").value, add);
});

document.getElementById("subtract").addEventListener("click", function(){
    checkNaN();
    mathmaticalFunction(document.getElementById("first-number").value, document.getElementById("second-number").value, subtract);
});

document.getElementById("multiply").addEventListener("click", function(){
    checkNaN();
    mathmaticalFunction(document.getElementById("first-number").value, document.getElementById("second-number").value, multiply);
});

document.getElementById("divide").addEventListener("click", function(){
    checkNaN();
    mathmaticalFunction(document.getElementById("first-number").value, document.getElementById("second-number").value, divide);
});