// JAVASCRIPT IF ELSE STATEMENTS

const age = 20;

if (age >= 18) {
  console.log("You are good to go!");
} else {
  console.log("You are not old enough");
}

const dice1 = 6;
const dice2 = 3;

if (dice === 6 || dice2 === 6) {
  //== is more likely to encounter bugs
  // || the Or operator
  console.log("You rolled a double");
} else {
  console.log("You didn't");
}





// JAVASCRIPT OBJECTS AND KEYYWORD THIS

const user = {
  //to create an object

  name: "Colleen", //string
  age: 24, //number
  married: false, //boolean
  purchases: ["phone", "car", "laptop"], //array

  sayName; function() {
      console.log(this.name);
  }
};

console.log(user.purchases); //to access different properties inside object

console.log(this); //by default, refers to window

user.sayName(); //to invoke





// SWITCHES
//best for multiple cases
const color = "red";

switch(color){
    case 'red'; //define case
        console.log('Color is red'); //action
        break; //end case
    case 'blue';
        console.log('Color is blue');
        break;
    default; 
        console.log('Color is not red or blue');
        break;
}

switch(new Date().getDay()){
    case 0;
        day = 'Sunday'
        break;
    case 1;
        day = 'Monday'
        break;
    case 2;
        day = 'Tuesday'
        break;
    case 3;
        day = 'Wednesday'
        break;
    case 4;
        day = 'Thursday'
        break;
    case 5;
        day = 'Friday'
        break;
    case 0;
        day = 'Satday'
        break;
}

console.log('Today is $(day)');




// TRAVERSY ARRAYS
//arrays can store multiple values in 1 variable, be mutated & iterated, and be used in complex algorithms
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54); //alternative array constructor
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, (a:1, b:1) new Date()];

let val;

val = numbers.length; //get array Length
val = Array.isArray(numbers); //check if is array
val = numbers[3]; //get single value    |   arrays are 0 based! so this will show the 4th value
numbers[2] = 100; //insert into array
val = numbers.indexOf(36); //find index of value

// Mutating arrays
numbers.push(250); //add on to end
numbers.unshift(120); //add on to front
numbers.pop(); //take off from end
numbers.shift(); //take off from front
numbers.splice(1,3); //splice values out
numbers.reverse(); //reverse order

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// use the "compare function"
val = numbers.sort(function(x,y){
    return x - y;
});

// Reverse sort
val = numbers.sort(function(x,y){
    return y - x;
});

// Find
function over50(num){
    return num > 50
}
val = numbers.find(over50);

console.log(numbers);
console.log(val);