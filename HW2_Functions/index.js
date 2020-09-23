// STRING CONCATENATION

//without Strings
const myAge = 24;
const yourAge = 21;
console.log(myAge + yourAge);

//with Strings
console.log("Hello my name is" + "Ed");
    //double and single quotes are read interchangeably, but use either consistantly

//Strings the modern way
console.log('Hello it's me Ed');
    console.log('Hello it\'s me Ed');  //"escape" the break by backslashing before the apostrophe


const name = "Colleen";
const age = 24;

//to Concatenate, use backticks     |       no apostrophe "break" with backticks
console.log(`Hello it's me and my name is ${name}`);    //use ${} to insert variable

//to Concatenate multiple variables
console.log("Hello it's me " + name + " and my age is " + age + " and I am getting old");
    // clean it up
    console.log(`Hello it's me ${name} and my age is ${age}`);

//to Concatenate a string & number
const combined = name + age;
console.log(combined);    //forms 1 string
    //to check data type
    console.log(typeof combined); 
    console.log(typeof age);





// NUMBERS
const num1 = 100;
const num2 = 50;
let val;

//simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;    //Modulus Operator reports the remainder

//Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.4);
val = Math.ceil(2.4);   //rounds up
val = Math.floor(2.4);  //rounds down
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = math.min(2,33,4,1,55,6,1,-2);   //comma separated values
val = Math.random();    //random decimal
val = Math.random() * 20 + 1;   //random number from 1-20
val = Math.floor(Math.random() * 20 + 1);    //wrap in floor to generate whole number

console.log(val);




// FUNCTIONS - PARAMETERS & ARGUMENTS

//Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    //this is the function body
    console.log('Running Calculate Bill!!');
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
}

//function Call or **Run**
const wesTotal = 500;
const wesTaxRate = 0.3;
//const myTotal = calculateBill(wesTotal, wesTaxRate);

//function Definition
function sayHiTo(firstName) {
    return 'Hello ${firstName}';
}

/*const greeting = sayHiTo('Wes');
console.log(greeting);*/





// JAVASCRIPT FUNCTIONS & PARAMETERS
const name = "Dev Ed"; //Global scope
const youtuber = "Traversy Media";

function adder(num1, num2) { //Function scope  |  () allows you to add parameters
    console.log(num1 + num2);
    }
        //variables from Global scope are available in Function scope, but not the other way around
    
    //to run the function, use a Function Invocation
adder (5,10);

function toUpper(text) { //keep namingConventions for easy reading
    const upperCased = text.toUpperCase();
    console.log(upperCased);
    //text & numbers have different built-in functions
}
toUpper(name);
toUpper(youtuber);

//other methods:
const toUpper = function(){
}
const toUpper = () =>{
}
    //shortest way
