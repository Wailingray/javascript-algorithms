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
function removePunct(str) {
    const punctSigns = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g; // почти вся возможная пунктуация
    const spaceSign = /\s+/g; // пробелы
    str = str.replace(punctSigns, '').replace(spaceSign, '');
    return str;
}

function palindrome(str) {
    str = removePunct(str); //очищаем входные данные от пробелов и пунктуации
    let reversedString = '';
    for (let i = 0; i < str.length; i += 1) {
        reversedString += str[str.length - (1 + i)];
      }
    if (reversedString.toLowerCase() === str.toLowerCase()) return true;
    else return false;
}


console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
console.log(palindrome('О, лета тело!'));
