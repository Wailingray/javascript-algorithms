/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    let strArray = str.split(' ');
    let newStr = '';

    /*Формируем итоговую строку*/
    strArray.forEach(function (el) {
        const firstLetter = el.slice(0,1).toUpperCase()
        const leftovers = el.slice(-(el.length - 1)).toLowerCase();
        newStr += (firstLetter + leftovers + ' ');
    });

    /*Удаляем лишний пробел в конце*/
    newStr = newStr.slice(0,-1);
    return newStr;
}

console.log(capitalize('молодость всё простит'));
console.log(capitalize('Испробовать их Все Должны Вы')); // "Молодость Всё Простит"