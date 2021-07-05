/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

/*Функция удаления знаков препинания и пробелов*/
function noPunct(str) {
    const punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g; // почти вся возможная пунктуация
    const spaceRE = /\s+/g; // пробелы
    str = str.replace(punctRE, '').replace(spaceRE, '');
    return str;
}


function palindrome(str) {
    str = noPunct(str); //очищаем входные данные от пробелов и пунктуации
    let reversedString = '';
    for (let i = 0; i < str.length; i += 1) {
        reversedString += str[str.length - (1 + i)];
      }
    if (reversedString.toLowerCase() === str.toLowerCase()) return true;
    else return false;
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
console.log(palindrome('О, лета тело!'));

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 * 
 // true
 * 
*/