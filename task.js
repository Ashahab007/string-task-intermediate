/* *
Task-1:
Count how many times a string has the letter a
*/

let sentence = "Task-1: Count how many times a string has the letter a";
let senToArr = sentence.split("");

let addA = [];

for (const element of senToArr) {
  if (element.includes("a")) {
    addA.push("a");
  }
}
console.log("The letter 'a' contains", addA.length, "times");

/* *
Task-2:
Count how many times A string has the letter a or A. A very important TAsk.
*/

let phrase =
  "Count how many times A string hAs the letter a or A. A very important TAsk.";

let phraseConArr = phrase.split("");

let addLwa = [];
let addUpA = [];

for (const element of phraseConArr) {
  if (element.includes("a".toLowerCase())) {
    addLwa.push("a");
  } else if (element.includes("A".toUpperCase())) {
    addUpA.push("A");
  }
}

console.log("Lower Case 'a'", addLwa, "i.e", addLwa.length, "times");
console.log("Upper Case 'A'", addUpA, "i.e", addUpA.length, "times");

/* *
Task-3:
Check whether a string contains all the vowels a, e, i, o, u
*/

let phrase1 = "Qick fox jmps over a big lazy dog daily.";
let phrase1ConArr = phrase1.split("");
// console.log(phrase1ConArr);

let vowel = ["a", "e", "i", "o", "u"];

let newArr = [];
for (const element of phrase1ConArr) {
  if (vowel.includes(element)) {
    console.log(element);
    newArr.unshift(element);
  }
}

console.log(newArr);
