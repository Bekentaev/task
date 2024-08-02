/*
Создайте следующие постоянные переменные:
escapeStr: строка, содержащая следующие специальные символы: `, \, /, " и '.
arr: массив, содержащий значения 4 и '2'. 
obj: объект, содержащий примитивные значения: 
str: со строковым значением. 
num: с числовым значением. 
bool: с булевым значением. u
ndef: с неопределенным значением. 
nested: объект, содержащий: arr: массив из 3 значений: 4, undefined и '2'. 
obj: объект с 3 свойствами 
str со строковым значением. 
num с числовым значением.
bool с булевым значением. 
nested, 
arr и obj должны быть заморожены,
так что их элементы или свойства не могут быть изменены.
*/

const escapeStr = "`\\/\"'";
const arr = [4, "2"];
const obj = {
  str: "Sasuke",
  num: 0,
  bool: false,
  undef: undefined,
  nested: {
    arr: [3, 4, undefined, "2"],
    obj: {
      str: "Naruto",
      num: 1,
      bool: true,
    },
  },
};

function deepFreeze(obj) {
  let propNames = Object.getOwnPropertyNames(obj);
  propNames.forEach(function (name) {
    let prop = obj[name];
    if (typeof prop === "object" && prop != null) {
      deepFreeze(prop);
    }
  });
  return Object.freeze(obj);
}

deepFreeze(obj);
deepFreeze(arr);
Object.freeze(arr);
obj.nested.arr = "hello";

console.log(obj, arr);
