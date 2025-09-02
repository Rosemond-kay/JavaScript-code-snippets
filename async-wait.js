// Async/Await = Async = makes afunction return a promise
                // Await = makes an async function wait for a Promise

                // Allows you to write asynchronous code in a synchronous manner
                // Async doesn't have resolve or reject parameters
                // Everything after await is placed in an event queueMicrotask

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

async function doChores(params) {

    try{
        const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log(takeOutTrashResult);

    console.log("You finished!");
}
    catch(error){
        console.error(error);
    }
    }
    

doChores()