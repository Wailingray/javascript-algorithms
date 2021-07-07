/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if(str1 === str2) return false;

    const charArr1 = str1.split('');
    const charArr2 = str2.split('');
   
    if (charArr1.length >= charArr2.length) {  
        for(let i = 0; i < charArr1.length; i++) {
            if(!(charArr1.includes(charArr2[i]))) return false;
        }
         
    }
    else {
        for(let i = 0; i < charArr2.length; i++) {
            if(!(charArr2.includes(charArr1[i]))) return false; 
        }  
    }    
            
    return true;       
}

console.log(anagram('UP', 'up')); // true
console.log(anagram('hello', 'bye')); // false