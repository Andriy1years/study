"use strict";
function safeMiltiply(a, b) {   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (typeof a === "number" && typeof b === "number") {
            resolve(a * b)
        } else {
            reject("Ожидались числа")
        }
    }, 1000);
    })
}


    try {
        let sum = await safeMiltiply(1, 2)
        console.log(sum);
        
    } catch (error) {
        console.log("напиши норм числа");
        
    }


  