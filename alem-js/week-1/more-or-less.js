/*
Создайте 4 функции: 
more - принимает 1 аргумент и прибавляет к нему 1.
less - принимает 1 аргумент и вычитает из него 1. 
add - принимает 2 аргумента и складывает их. 
sub - принимает 2 аргумента и вычитает второй аргумент из первого. 
Все функции должны возвращать результат операций, указанных выше.
*/

const more = (arg) => arg + 1;
const less = (arg) => arg - 1;
const add = (arg1, arg2) => arg1 + arg2;
const sub = (arg1, arg2) => arg1 - arg2;

console.log("more: ", more(1));
console.log("less: ", less(1));
console.log("add: ", add(1, 2));
console.log("more: ", sub(1, 2));
