/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        let stepWord = '';

        if (i % 3 === 0) stepWord += 'fizz';
        if (i % 5 === 0) stepWord += 'buzz';
        
        if (stepWord === '') console.log(i);
        else console.log(stepWord);
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(99));