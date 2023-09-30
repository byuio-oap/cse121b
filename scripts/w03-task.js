/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

//Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1,number2){
    //In the function, return the sum of the parameters number1 and number2
    return number1 +number2;
}

//Using a function declaration, define another function named addNumbers that gets the values of two HTML form controls
// with IDs of add1 and add2.
function addNumbers(){
   
    let txtboxAddInputNum1 = Number(document.querySelector('#add1').value);//Binds user input on textbox Number 1  with Id add1
    let txtboxAddInputNum2=Number(document.querySelector('#add2').value);//Binds user input on textbox Number 2 with ID add2
    document.querySelector('#sum').value=add(txtboxAddInputNum1,txtboxAddInputNum2); // //Calls function add and adds the two numbers , and binds the result to textbox id sum.

 //Checks if the input is a number, and display and alert if it is a letter etc.   
    if (isNaN(txtboxAddInputNum1)|| isNaN(txtboxAddInputNum2)){
        alert("Please enter valid number.");
        return;
    }

}
//Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector('#addNumbers').addEventListener('click',addNumbers);





/* Function Expression - Subtract Numbers */

const subtract=function(number1,number2){
    return number1 - number2;
}

function subtractNumbers(){
    
    let txtboxSubtractInputNum1=Number(document.querySelector('#subtract1').value);
    let txtboxSubtractInputNum2=Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value=subtract(txtboxSubtractInputNum1,txtboxSubtractInputNum2);
}

document.querySelector('#subtractNumbers').addEventListener('click',subtractNumbers);




/* Arrow Function - Multiply Numbers */
const multiply =(number1,number2)=>number1 * number2;

const multiplyNumbers=()=>{

let txtboxMultiplyInputNum1=Number(document.querySelector('#factor1').value);
let txtboxMultiplyInputNum2=Number(document.querySelector('#factor2').value);
document.querySelector('#product').value=multiply(txtboxMultiplyInputNum1,txtboxMultiplyInputNum2);

}

document.querySelector('#multiplyNumbers').addEventListener('click',multiplyNumbers)



/* Open Function Use - Divide Numbers */
function divide(number1,number2){
    
    return number1/number2;
}
function divideNumbers(){
    
    let txtboxDivideInputNum1=Number(document.querySelector('#dividend').value);
    let txtboxDivideInputNum2=Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value=divide(txtboxDivideInputNum1,txtboxDivideInputNum2);

}
document.querySelector('#divideNumbers').addEventListener('click',divideNumbers);



/* Decision Structure */

//Declare and instantiate a variable of to store the current date.
const currentDate=new Date();
//Declare a variable to hold the current year.
let currentYear;
//Using the variable declared in number 1, call the built-in getFullYear() method/function and assign it to the variable declared in 2.
currentYear=currentDate.getFullYear();
//Assign the current year variable to an HTML form element with an ID of year.
document.querySelector('#year').textContent=currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
//Declare and instantiate an array variable to hold the numbers 1 through 13
const numbersArray=[1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').textContent=numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').textContent=numbersArray.filter(
    (number)=>number % 2 
)

/* Output Evens Only Array */
document.querySelector("#evens").textContent = numbersArray.filter(
    (number) => number % 2 === 0
  );

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").textContent = numbersArray.reduce(
    (sum, number) => sum + number,
    0
  );

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").textContent = numbersArray.map(
    (number) => number * 2
  );


/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").textContent = numbersArray
  .map((number) => number * 2)
  .reduce((sum, number) => sum + number, 0);
