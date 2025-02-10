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
Note: to solve it correctly need to discuss with Programming Hero
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

/* *
Task-4:
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

*/

let sentence1 = "xX hi xX xXXx";

if (
  sentence1.includes("X".toUpperCase()) ||
  sentence1.includes("x".toLowerCase())
) {
  sentence1 = sentence1.replaceAll("X", "Y").replaceAll("x", "y");
  console.log(sentence1);
} else {
  console.log("Don't have any 'x' or 'X' ");
}

/* *
Task-5:
Capitalize Every first Letter of each word in a String
*/

let phrase2 = "quick fox jumps over a big lazy dog daily.";

let phrase2Arr = phrase2.split(" ");
// console.log(phrase2Arr);

// console.log(phrase2Arr[0][0].toUpperCase() + phrase2Arr[0].slice(1));

let upperCaseWord = "";
for (let i = 0; i < phrase2Arr.length; i++) {
  upperCaseWord =
    upperCaseWord +
    phrase2Arr[i][0].toUpperCase() +
    phrase2Arr[i].slice(1) +
    " ";
}
console.log(upperCaseWord);
// console.log(typeof upperCaseWord.toString());
