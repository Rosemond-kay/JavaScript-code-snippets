// // // alert('Hello');
// // // console.log(1);
// // // console.log(15);
// // // let name = Animation;
// // // console.log ("hello, " + name);

// // let firstName = 'Rosemond';
// // let lastName = 'Ampomah';

// // let fullName = firstName + lastName;
// // console.log(fullName);

// // // getting a character
// // console.log(fullName[0]);

// // // length of a string
// // console.log(fullName.length);

// // // string methods
// // console.log(fullName.toUpperCase());

// // let result = fullName.toLowerCase();
// // console.log(result + fullName);

// // let index = result.indexOf('h');
// // console.log(index);



// //for loop
// let names = ['Ama', 'Kofi', 'Esi'];
// for(let i=6; i > names.length; i--){
//     console.log(i);
// }



// //while loop
// let b = 0;
// while(b < 5){
//     console.log('value of i is: ', b);
//     b++;
// }

// // do while loop
// let y=0;

// do {
//     console.log('value of i is: ', y);
//     y++;
// }
// while (y < 5)
  

// //if statements

// let girls = ['akua', 'afua', 'naana', 'ewura'];

// if (girls.length > 2){
//     console.log('more than two girls');
// }

//else if statements
// const password = prompt('please enter password')

// if(password.length > 10){
//     alert('your password is long enough!');
// } else if(password.length < 10 && password.includes('@')){
//     alert('strong enough');
// }
// else {
//     alert('your password should have at least 8 characters');
// }


//FUNCTIONS
// function declaration
function greet(){
    console.log('Hi there');
}

greet();


// function expression: ends in a semi-colon
const talk = function(){
    console.log('Bonjour');
};
talk();



const square = function(x) {
return x * x;
};
console.log(square(12));

const speak = function(name, time){
    return(`good ${time} ${name}`);
}
console.log(speak('Rosemond', 'night'));

const calcArea = function(radius){
    return 3.14 * radius**2;
}
const area = calcArea(5)
console.log(area);

const calcVol = function(area, height){
    return area * height;
}
const volume = calcVol(area, 10);

console.log(volume);

// const getName = () => 'hello ' + prompt('enter your name');
// let girlie = getName();
// console.log(girlie);


const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([10,15,30],0.2));



//CALLBACK FUNCTIONS
function processNumbers(a, b, operation) {
    return operation(a, b);  // Does whatever operation says
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;

console.log(processNumbers(5, 3, add));      // 8
console.log(processNumbers(5, 3, multiply)); // 15  
console.log(processNumbers(5, 3, subtract)); // 2


let people = ['abena', 'fiifi', 'yaa', 'kojo', 'ama'];

const showPerson = (person, index) =>{
    console.log(`${index} - hello ${person}`);
};

people.forEach(showPerson);

// people.forEach((person, index) =>{
//     console.log(person, index);
//     console.log(`${person} has ${person.length} characters`);
// });

//let people = ['abena', 'fiifi', 'yaa', 'kojo', 'ama'];

//people.forEach(function(person){
    //console.log(person);
//});


// const nameLength = () => 'name';
// console.log()



















































































































































































