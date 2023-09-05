// O que são vetores ou arrays

// Como declarar um array
// let array = ["string", 1, true];
// console.log(array);

let arrayDois = [
  "string",
  1,
  true,
  ["array1"],
  ["array2"],
  ["array3"],
  ["array4"],
];
// console.log(arrayDois[2]); // acessar índice

// // forEach
// arrayDois.forEach(function(item, index){console.log(item, index)})

// push
// arrayDois.push('novo item');
// console.log(arrayDois);

// pop
// arrayDois.pop();
// console.log(arrayDois);

// shift
// arrayDois.shift();
// console.log(arrayDois);

// unshift
// arrayDois.unshift("novo item no inicio");
// console.log(arrayDois);

// indexOf
// console.log(arrayDois.indexOf(true))

// splice
// arrayDois.splice(0,3);
// console.log(arrayDois);

// slice
// let novoArray = arrayDois.slice(0, 3);
// console.log(novoArray);

let object = {
  string: "string",
  number: 1,
  boolean: true,
  array: ["array"],
  objectInterno: { objectInterno: "objeto interno" },
};

// console.log(object.objectInterno);

// var string = object.string;
// console.log(string);

// var arrayInterno = object.array;
// console.log(arrayInterno);

var { string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno);
