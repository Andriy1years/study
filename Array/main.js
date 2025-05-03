// это база
const Array = [20, 3, true, "by"]
//             0   1   2     3
console.log(Array[1]); // 3
//                /\
//                |
//             вызов определеного елемента

//можно менять значение елемента или создавать новый елемент
Array[2] = "gg standoff" //изменение значения
console.log(Array); // [20, 3, 'gg standoff', 'by']
console.log(Array[4]); // undefined

//length выдаст длину масива
console.log(Array.length);// 7


//---------------------at---------------
// at используется чтобы вытянуть определеный елемент для работы с ним
// хороший он в том что может работать от конца масива
// пример
// [1, 2, 4, 5, 78]
// -5 -4 -3 -2  -1 
// в спецефичных случаях ето может быть полезно
console.log(Array.at(-1)); // by
console.log(Array[2]);// gg standoff
// но по большей части не используется так как можно просто записать в квадратных скопках и результат будет тот же


//-------------------push----------------
//push добавляет новый елемент в конец масива
Array.push('ранальдо') // добавляем новый елемент в конец
console.log(Array); //[20, 3, 'gg standoff', 'by', 'ранальдо']


// -------------pop--------------
//pop удаляет последений елемент
Array.pop(); // удаляет только последний елемент 
console.log(Array); // [20, 3, 'gg standoff', 'by']


//---------unshift-----------
//используется для того чтоб добавить елемент в начало масива 
Array.unshift("хз первый")
console.log(Array);//['хз первый', 20, 3, 'gg standoff', 'by']

//--------shift---------
//используется чтобы удалить первый елемент
Array.shift();
console.log(Array);//[20, 3, 'gg standoff', 'by']

//-------splice--------
//используется для удаления какого либо елемента масива
Array.splice(2, 2, "s")
//          /\ /\  /\
//          |  |   |
//индекс елемента  | 
//            |   |
//        сколько елемнтов нужно забрать если не указылывать ничего то удалятся все до конца  
//               |
//     можно добавлять новый елемент всесто старого
console.log(Array);// [20, 3, 's']

// также им можно создавать новые масивы
let newArr = Array.slice(1, 3);
console.log(newArr); // [3, 's']

//---------concat---------
// мочно обэдинить 2 масива в новом

let bebrosoket = Array.concat(newArr);
console.log(bebrosoket);// [20, 3, 's', 3, 's']

//-----forEach------
//используется чтобы легко работать сразу из всеми елементами масива
let numArr = [
    { name: 'bebrosoket', age: 1 },
    { name: 'bebrosoket1', age: 2 },
    { name: 'bebrosoket2', age: 3 },]

numArr.forEach((el, index, array) => {
    array[index].age = el.age + 2 // так можно делать но нужно быть внимательным так как forEach изменяет масив
    console.log(el.name + " is " + el.age + " days");
 /* вывод
    bebrosoket is 3 days
    bebrosoket1 is 4 days
    bebrosoket2 is 5 days*/
});

//---------map-----------
//используется если не нужно изменять масив а создать новый и изменить там

let Arrtwo = numArr.map((el) => {
    el.age + 2 //+ 2
    return el
})
console.log(Arrtwo);


//---------split----------
//используется для того чтоб разсаединять строки и записать их в масив
let str = "fyri, xd, da"

let newStr = str.split(", ");
console.log(newStr);// ['fyri', 'xd', 'da']

//-------join----------
//делает обратное split
let backStr = newStr.join()
console.log(backStr); // fyri,xd,da

//-------filter------
//фильтрует масив и вертает новый уже отфильтрованый
let filter = numArr.filter(value => value.age >= 4)

console.log(filter); //[{…}, {…}] профильстовал только 2


//--------------------колекции------------------

//работает с Map 
//так же есть has, get, delete, clear, .size 
let m1 = new Map()
m1.set("хз 1", 'гав гав');
m1.set("мож 2", 'мяв гав');
m1.set("хз 1", 'гав мяв')

m1.size
m1.get('fox') // undefined
m1.has('by') // false
m1.delete('мож 2')

for (let [key, value] of m1) {
    console.log(key + " это " + value);  
}

  
let unik = new Set([1, 2, 3, 4])

unik.add(1)
unik.add(5)
console.log();
console.log(unik);

  
let arr = [1, 2, 3, 4]

arr.push(1)
console.log();
console.log(arr);

