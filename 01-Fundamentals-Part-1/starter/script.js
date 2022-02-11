// Coding Challenge 1

// const massMark = 78; 
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95

// function calculateBMI(mass, height) {
//     return (mass / height ** 2);
// }

// const BMIMark = calculateBMI(massMark, heightMark);
// const BMIJohn = calculateBMI(massJohn, heightJohn);

// let markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIJohn, BMIMark, markHigherBMI);

// Coding Challenge 3

/*
const dolphinsScore = (97 + 112 + 101) / 3;
const koalasScore = (109 + 95 + 106) / 3;

console.log(dolphinsScore, koalasScore);

let winner;
if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
    winner = 'Dolphins';
} else if (dolphinsScore < koalasScore && koalasScore >= 100) {
    winner = 'Koalas';
} else if (koalasScore === dolphinsScore && koalasScore >= 100){
    winner = 'Draw';
} else {
    winner = 'No winner';
}
console.log(winner);
*/

// Coding Challenge #4

const billValue = 430;
const tip = billValue >=50 && billValue <=300 ? 15/100 : 20/100;
const tipValue = billValue * tip;
const totalValue = billValue + tipValue;

console.log(`The bill was ${billValue}, the tip was ${tipValue} and the total value ${totalValue}`);









