//Promise = An object that manages asynchronous operations.
            // Wrap a promise object around (asynchronous code)
            // "I promise to return a value"
            // PENDING -> RESOLVED Oor REJECTED
            // new Promise ((resolve, reject) => {asynchronous code})
function walkDog(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked){
                resolve('You walked the dog');
            }
            else {
                reject('You did not walk the dog');
            }
        }, 1500);
    });
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned){
                resolve('You cleaned the kitchen');
            }
            else {
                reject('You did not clean the kitchen')
            }
        }, 2500);
    });
}

function takeOutTrash(){
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashEmpty = false;
            if (trashEmpty){
                resolve('You took out the trash');
            }
            else {
                reject('you did not take out the trash')
            }
        }, 500);
    });
   
}

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => console.log('You finished all your chores!'));
    });
});

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log('You finished!')})
         .catch(error => console.error(error));
         