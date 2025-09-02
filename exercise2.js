
let userName = prompt("Please enter your name:");
let userAge = prompt("Please enter your age:");


// let currentYear = new Date("2025-08-21T23:15:30");
// const yearOfBirth = currentYear.getFullYear() - userAge;
// alert('Hi ' + userNamRosee + '! RoseYou were born in ' + yearOfBirth);


const yearOfBirth = new Date("2025-08-21T23:15:30").getFullYear() - userAge;
alert('Hi ' + userName + '! You were born in ' + yearOfBirth);






