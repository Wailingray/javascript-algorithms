/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    let resultArr = [2];
    if (num <= 1) return [];
    for(let i = 2; i <= num; i++) {
        for(let k = 2; k < i; k++) {
            if(i % k === 0) break;
            if (k === i - 1) resultArr.push(i); 
        }
    }
    return resultArr;
}

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]