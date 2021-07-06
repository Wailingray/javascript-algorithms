/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    const simplMass = Array.from({ length: n }, (v, i) =>  i); 
    //simplMass.unshift(0)
    console.log(simplMass);
    let fibMass = [];
    simplMass.reduce(function(prevVal, el){
        fibMass.push(el);
        fibMass.push(el + prevVal);
        return el   
    }, 0);
    console.log(fibMass);
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(7)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)