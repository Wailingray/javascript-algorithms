/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    strArray = str.split(' ');
    let newStr = '';

    strArray.forEach(function (el) {
        let firstLetter = el.slice(0,1).toUpperCase()
        let remains = el.slice(-(el.length - 1)).toLowerCase();
        newStr += (firstLetter + remains + ' ');
    });

    return newStr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит'));
console.log(capitalize('Испробовать их Все Должны Вы')); // "Молодость Всё Простит"