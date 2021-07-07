/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
    let counter = 0;
    for(let i = 1; i <= n; i++) {
           let strArr = i.toString().split('');
           strArr.forEach(function(el) {
               if (el == 0) counter++;      
           });
    }       
    return counter;
}

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(342)); // 64
