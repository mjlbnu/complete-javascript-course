// Coding Challenge #1
/*
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No teams win');
    }
}

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
*/

// Coding Challenge #2
/*
const calcTip = function(billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * (15/100) : billValue * (20/100);
}
console.log(calcTip(400));

const bills = [125, 555, 44];
const tips = new Array;
for (bill of bills) {
    tips.push(calcTip(bill));
}
console.log(tips);

const total = [];
for (let i = 0; i < bills.length; i++) {
    total.push(bills[i] + tips[i]);
}
console.log(total);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
const jonas = {
    firstname: 'Jonas',
    lastname: 'Schedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicence: false,
    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstname} is a ${this.calcAge()}-year old ${this.job}, and he ${this.hasDriversLicence? 'a': 'no'} driver's license.`
    },
}

console.log(jonas.getSummary());

// Coding Challenge #3

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

john.calcBMI();
mark.calcBMI();
console.log(`John's BMI (${john.bmi}) is ${john.bmi > mark.bmi ? 'higher' : 'minor'} than Mark's (${mark.bmi})!`);
*/
console.log('----------Coding Challenge #4-------------')

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = new Array;
const totals = [];

const calcTip = function(billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * (15/100) : billValue * (20/100);
}

const calcAverage = function(arr) {
    let sum = 0;
    for (value of arr) {
        sum += value;
    }
    return sum / arr.length;
}

for (bill of bills) {
    tips.push(calcTip(bill));
}
console.log(tips);

for (let i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i]);
}
console.log(totals);

console.log(calcAverage(totals));