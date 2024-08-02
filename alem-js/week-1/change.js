/*
Создайте 2 функции:
get - функция, принимающая ключ и возвращающая соответствующее значение из объекта-источника.
set - функция, принимающая ключ и значение. 
Обновляет значение соответствующего свойства исходного объекта и возвращает значение.
*/
const sourceObject = {
  num: 42,
  bool: true,
  str: "some text",
  log: console.log,
};

const get = (key) => {
  return sourceObject[key];
};

const set = (key, value) => {
  return (sourceObject[key] = value);
};

console.log(get("num"), 42);
console.log(get("bool"), true);
console.log(get("str"), "some text");
console.log(get("log"), console.log);
console.log(get("noexist"), undefined);
// Set

console.log(set("num", 55), 55);
console.log(set("noexist", "nice"), "nice");
console.log(get("num"), 55);
console.log(get("noexist"), "nice");
console.log(set("log"), undefined);
console.log(get("log"), undefined);
