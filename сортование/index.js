let array2 = [42, 5, 13, 9, 28, 6, 17];
let array3 = [3, 11, 11, 0, 25, 18, 14, 7];



function Sort(array) {

    let cheker = false; //чекер щоб код поняв що ще треба сортувати
    
    for (let i = 0; i <= array.length;) { //цикл
        if (array[i] > array[i + 1]) {//якщо перше число бiльше другого
            cheker = true;
            let firstNum = array[i]
            let secondNum = array[i + 1]
            array[i] = secondNum;
            array[i + 1] = firstNum;
        }

        else { //якщо масир вiдсортувався
            if (cheker) { //чек якщо ще не сортований вертаэмся 
                 i = -1; // вiдкидую цикл спочатку
                 cheker = false; 
                } 
            };
        i++;
    };
    console.info('масив сортований:' + array); //вивод iнформацii
}
Sort(array3); // визов функцii
