"use strict";
function delayedMultiply(a, b) {
    return  new Promise(resolve => {
        setTimeout(() => {
            resolve(a * b)
        }, 1000);
    });
}
async function main() { 

   let sum = await delayedMultiply(4, 5)
    console.log(sum);  
}

main()