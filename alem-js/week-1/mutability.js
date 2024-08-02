/*
Создайте три копии объекта 
person с именами clone1, clone2 и samePerson.
Увеличьте возраст person на единицу и установите его страну на 'FR'.
Вы должны найти способ сохранить исходные значения clone1 и clone2. 
Значения samePerson должны меняться при изменении персоны.
 */

const person = {
  name: "Rick",
  age: 77,
  country: "US",
};

const samePerson = person;
const clone1 = Object.assign({}, person);
const clone2 = {};
for (let key in person) {
  clone2[key] = person[key];
}
person.name = "Abylay";
person.age += 1;
person.country = "FR";

console.log(person);
console.log(samePerson);
console.log(clone1);
console.log(clone2);

console.log(clone1 != clone2);
