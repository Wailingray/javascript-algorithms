/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

/*Функция из 6 задания для удаления дубликатов*/
function uniq(arr) {
    const uniqueArr = arr.filter(function (item, position, array) {
        return array.indexOf(item) === position; 
        });
    return uniqueArr;
}


function intersection(arr1, arr2) {
    let resultArr = [];
    if(arr1.length >= arr2.length) {
        for(let i = 0; i < arr2.length; i++) {
            if (arr1.includes(arr2[i])) resultArr.push(arr1[i])
        }
    }
    else {
        for(let i = 0; i < arr1.length; i++) {
            if (arr2.includes(arr1[i])) resultArr.push(arr1[i])
        }
    }
     return uniq(resultArr);
    }
    
console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []