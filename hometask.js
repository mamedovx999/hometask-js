//1
function checkDivisibility(num) {
    return num % 3 === 0 && num % 7 === 0; 
}
let num = Math.floor(Math.random() * 100) + 1; 
console.log(`Təsadüfi ədəd: ${num}`);
if (checkDivisibility(num)) {
    console.log("Ədəd 3-ə və 7-ə qalıqsız bölünür.");
} else {
    console.log("Ədəd 3-ə və 7-ə qalıqsız bölünmür.");
}
//2
let n = 1; 
let m = Math.floor(Math.random() * (100 - n)) + n + 1; 
let oddCount = 0;
let sumOfOdds = 0;
for (let i = n + 1; i < m; i++) {
  if (i % 2 !== 0) {
    oddCount++;
    sumOfOdds += i;
  }
}
console.log(
  `${n} və ${m} ədədləri aralığındakı tək ədədlərin sayı: ${oddCount}`
);
//3
//let n = 1; // Başlanğıc ədədi
//let m = Math.floor(Math.random() * 100) + n + 1; 
//let sumOfOdds = ((m - n - 1) / 2) * (n + m); 
//console.log(`${n} və ${m} aralığındakı tək ədədlərin cəmi: ${sumOfOdds}`);
//4
let isComplexNumber = checkComplex(n);
if (isComplexNumber) console.log(`${n} ədədi mürəkkəbdir`);
else console.log(`${n} ədədi sadədir`);
function checkComplex(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return true;
  }
  return false;
}
//5
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let sumOfEvens = arr.reduce((sum, current) => {
  return current % 2 === 0 ? sum + current : sum;
}, 0);
console.log(`${arr} aralığındakı cüt ədədlərin cəmi: ${sumOfEvens}`);
//6
//function sumOfSqrEvens(arr) {
 //   return arr.reduce((sum, current) => {
  //    return current % 2 === 0 ? sum + Math.pow(current, 2) : sum;
 //   }, 0);
 // }

//  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
 // console.log(`${arr} aralığındakı cüt ədədlərin kvadratları cəmi: ${sumOfSqrEvens(arr)}`);
//7
  function sumOfBetween(a, b) {
    let sumOfElements = 0;
    for (let i = a + 1; i < b; i++) {
      sumOfElements += i;
    }
    return sumOfElements;
  }
  
  let a = 3;
  let b = 6;
  console.log(`${a} və ${b} aralığındakı ədədlərin cəmi: ${sumOfBetween(a, b)}`);
//8
let buttonbackground = document.getElementById("btn");
let input = document.getElementById("input");

input.onclick = function() {
  let currentSize = parseInt(buttonbackground.style.backgroundSize) || 0;
  buttonbackground.style.backgroundSize = (currentSize + 10) + "px";
};

