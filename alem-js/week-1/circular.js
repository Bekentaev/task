/*
Создайте объект с именем circular, у которого есть свойство circular с самим собой в качестве значения.
*/

const circular = {};
circular.circular = circular;

console.log(circular.circular.circular.circular.circular === circular);
