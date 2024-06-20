"use strict";

//ex 1
let apples = 10;
let givenApples = 3;
apples -= givenApples;
console.log(`The number of apples left will be ${apples}.`);

//ex 2
const calcAvrage = (a, b, c) => (a + b + c) / 3;
let student = calcAvrage(85, 90, 78);
console.log(`The average score will be ${student}.`);

// ex 3

let One_Book = 15;
let Book_8 = One_Book * 8;
console.log(`8 books will cost ${Book_8} $.`);

// ex 4

const remainder = 29 % 5;
console.log(`The remainder number from 29 dived with 5 will be ${remainder}.`);

// ex 5
let carSpeed = 60;
let time = 3;
let distanceCover = carSpeed * time;
console.log(`The distance will be ${distanceCover} km.`);

// ex 6

let totalCandies = 25;
let numberOfFriends = 4;
let candiesPerFriend =
  (totalCandies - (totalCandies % numberOfFriends)) / numberOfFriends;
let remainingCandies = totalCandies % numberOfFriends;
console.log(`Each friend get ${candiesPerFriend} candies.`);
console.log(`Candies left over: ${remainingCandies}.`);

// ex 7

let originalPrice = 50;
let newPrice = 70;
let increase = newPrice - originalPrice;
let percentageIncrease = (increase / originalPrice) * 100;
console.log(`The percentage increase is ${percentageIncrease} %.`);

// ex 8

let SumMoneySaved = 10;
let numberDays = 7;
let totalSavedMoeny = SumMoneySaved * numberDays;
console.log(`The total will be ${totalSavedMoeny} $.`);

//ex 9
let lengthRectangle = 8;
let widthRectangle = 5;
let areaRectange = lengthRectangle * widthRectangle;
console.log(`The area of the Rectangle will be: ${areaRectange} meters`);

//ex 10
let costItem = 120;
let salesTax = costItem * 0.1;
let totalCost = costItem + salesTax;
console.log(`The total cost of the item plus salesTax will be ${totalCost} $.`);

//ex 11
let batteryLastFullyCharge = 12;
let batteryUsed = 3;
let leftBattery = batteryLastFullyCharge - batteryUsed;
console.log(`Battery will last ${leftBattery} hours.`);

//ex 12
let earningPerHour = 20;
let workHours = 5;
let totalEarnings = earningPerHour * workHours;
console.log(`The total will be ${totalEarnings} $.`);

//ex 13
let amount = 50;
let doubleAmount = amount * 2;
console.log(`The double amount will be ${doubleAmount} $.`);

//ex 14
let totalStudents = 45;
let numberOfStudentsInAGroup = 6;
let totalGroups =
  (totalStudents - (totalStudents % numberOfStudentsInAGroup)) /
  numberOfStudentsInAGroup;
let remainingStudents = totalStudents % numberOfStudentsInAGroup;
console.log(`It will be ${totalGroups} groups`);
console.log(
  `The number of studens left wihout a group will be ${remainingStudents}.`
);

//ex 15
let oneHour = 60;
let threeHours = oneHour * 3;
console.log(`In 3 hours will be ${threeHours} minutes.`);

//ex 16
let oneBatch = 2;
let fiveBatchs = 5;
let totalCups = oneBatch * fiveBatchs;
console.log(
  `The number of cups for 5 batches will be: ${totalCups} cups fo flour.`
);

//ex 17
let bookPages = 300;
let readPages = 123;
let pagesLeft = bookPages - readPages;
console.log(`The number of pages left to read is ${pagesLeft}.`);

//ex 18
let salary = 2000;
let spend = 1500;
let savedMoney = salary - spend;
console.log(`${savedMoney} $ will be saved each month.`);

//ex 19
let slicesPizza = 8;
let friends = 3;
let slicesForEachFrind = (slicesPizza - (slicesPizza % friends)) / friends;
let SlicesLeft = slicesPizza % friends;
console.log(`Each friend will get ${slicesForEachFrind} slices.`);
console.log(`The number of slices of pizza left will be ${SlicesLeft}.`);

// tema 02 JS

// Laurentiu a luat 85% din punctajul maxim la bacalaureat la limba Romana. Are nevoie de nota "5" ca sa treaca in sistemul romanesc de invatamant. A trecut examenul?

let notaMaxima = 10;
let procentNotaLaurentiu = 0.85;
let notaMinimaTrecere = "5";

let notaExactaLaurentiu = notaMaxima * procentNotaLaurentiu;
let aTrecutExamenulLaurentiu = notaExactaLaurentiu >= notaMinimaTrecere;
console.log(aTrecutExamenulLaurentiu);
console.log(
  `Laurentiu are nota ${notaExactaLaurentiu} la lb Romana, fiind mare decat minimul ${notaMinimaTrecere}, care este de trecere.`
);

// vrem sa facem un zid pe o latime de 4 metri, folosind caramizi de 1 metru latime. Daca avem 17 caramizi, vom putea avea ultimul nivel complet?
let zidLatime = 4;
let caramideLatime = 1;
let nrCaramizi = 17;
let caramiziPerLevel = zidLatime / caramideLatime;
let cateNiveleSuntFull =
  (nrCaramizi - (nrCaramizi % caramiziPerLevel)) / caramiziPerLevel;
console.log(cateNiveleSuntFull);
let cateCaramiziAuMaiRamas = nrCaramizi % cateNiveleSuntFull;
let UltmiulNivel = cateCaramiziAuMaiRamas === 0;
console.log(UltmiulNivel);
