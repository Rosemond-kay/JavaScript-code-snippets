// objects
// key-value pairs in {}
const myObj = {name: "Rosemond"};

console.log(myObj.name);

const nextObj = {
    age: 26,
    job:'developer',
    quote: () => 
        "Inshaa Allah"
    ,
    fashion: {
        work: 'corporate',
        masjid: 'abaya',
        home: 'casual'
    },
    
};
console.log(nextObj['job']) //alternative to .commands
console.log(nextObj.quote());
console.log(nextObj.fashion.masjid)


//DESTRUCTURING
//1. Swapping Variables
let a = 1;
let b = 2;
[a,b] = [b+a,a-b]

console.log(a)
console.log(b)


//2. Swap 2 elements in an array
const food = ['waakye', 'fufu', 'banku', 'kenkey', 'jollof'];


[food[0], food[3]] = [food[3], food[0]];
console.log(food);

//3. Assigning array elements to variables

const [favFood, nextFav, thirdfav, ...extraFood] = food;
console.log(favFood);
console.log(nextFav);
console.log(thirdfav);
console.log(extraFood);


//4. Extract Values from Objects

const woman = {
    height: 5.6,
    color: 50,
    brand: 'vintage',
    price: 'gentle'
}

const man = {
    height: 3.6,
    color: 90,
    brand: 'meh',
    
}

//const {height, color, brand, price} = woman;
const {height, color, brand, price="wicked"} = man; //extracting values from objects

console.log(height);
console.log(color);
console.log(brand);
console.log(price);


//5. Destructuring in function Parameters

function showVehicle({speed, color, brand, price=4500}) //destructuring for objects that don't have the price key
{
    console.log(`specs:  ${speed} ${brand}`);
    console.log(`price:  ${price}`);
    console.log(`color: ${color}`);
}
const car = {
    speed: 5.6,
    color: 'red',
    brand: 'vintage',
    price: 3500
}

const truck = {
    speed: 3.6,
    color: 90,
    brand: 'new',
}


showVehicle(truck);
















































