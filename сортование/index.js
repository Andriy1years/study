let array2 = [42, 5, 13, 9, 28, 6, 17];
let array3 = [3, 11, 11, 0, 25, 18, 14, 7];



function Sort(array) {

    let cheker = false; //чекер щоб код поняв що вiн вже все вiдсортував
    for (let i = 0; i <= array.length;) {
        //якщо перше число бiльше другого
        if (array[i] > array[i + 1]) {
            cheker = true;
            let firstNum = array[i]
            let secondNum = array[i + 1]
            array[i] = secondNum;
            array[i + 1] = firstNum;
        }

        else { 
            if (cheker) {
                 i = -1; 
                 cheker = false; 
                } 
            };
        i++;
    };
    console.info('масив сортований:' + array);
}
Sort(array3);
