/*
Напишите 5 функций: 
words: принимает строку, разделяет ее пробелами и возвращает массив подстрок. 
sentence: принимает массив строк и соединяет их пробелами, чтобы вернуть одну строку. 
yell: принимает строку и возвращает ее в верхнем регистре. 
whisper: принимает строку и возвращает ее в нижнем регистре, окруженную *. 
capitalize: принимает строку и преобразует ее так, чтобы первый символ был в верхнем регистре, а последующие - в нижнем.
*/

const words = (str) => {
  return str.split(" ");
};
let r = "r";

console.log(words("a b c"));
console.log(words("Hello  world"));
console.log(words(`${r} ${r} ${r}`));

const sentence = (arr) => {
  return arr.join(" ");
};

console.log(sentence(["a", "b", "c"]));
console.log(sentence(["Hello", "", "world"]));
console.log(sentence([r, r, r]));

const yell = (str) => {
  return str.toUpperCase();
};

console.log(yell("howdy stranger ?"));
console.log(yell("Déjà vu"));

const whisper = (str) => {
  return "*" + str.toLowerCase() + "*";
};

console.log(whisper("DÉJÀ VU"));
console.log(whisper("HOWDY STRANGER ?"));

const capitalize = (str) => {
  const firtWord = str[0].toUpperCase();
  return firtWord + str.slice(1).toLowerCase();
};

console.log(capitalize("str"));
console.log(capitalize("qsdqsdqsd"));
console.log(capitalize("STR"));
console.log(capitalize("zapZAP"));
console.log(capitalize("zap ZAP"));
console.log(capitalize("adasdaksl;dk123kj123lj12kl3123"));
