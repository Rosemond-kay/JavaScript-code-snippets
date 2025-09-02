//rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array
// spread = expands an array into separate elements
// rest = bundles separate elements into an array


//SPREAD
let bag1 = ['comb', 'phone', 'keys'];
let bag2 = ['shoes', 'snacks', 'tissues'];

let baggage = [...bag1, ...bag2];
console.log(baggage);


//REST Parameters


function openfridge(...foods){ //openFridge has been designed to accept any number of arguments because of the REST parametere
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

const food1 = 'kenkey';
const food2 = 'rice';
const food3 = 'fish';
const food4 = 'chicken';
const food5 = 'waakye';

//openfridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);



function sum(...numbers){

    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1, 5, 90);

console.log(`Your total is $${total}`);


function average(...numbers){

    let result = 0;
    for (let number of numbers){
        result += number;
    }
    return result/numbers.length;
}

const mean = average(2, 4, 18);

console.log(`Your average is $${mean}`);



function joinString(...strings){
    return strings.join(" ");
}


const fullName = joinString("Miss", "Rosemond", "Ampomah");
console.log(fullName)













