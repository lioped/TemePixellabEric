"use strict";

/*
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
let candiesPerFriend = (totalCandies - (totalCandies % numberOfFriends)) / numberOfFriends;
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
let totalGroups = (totalStudents - (totalStudents % numberOfStudentsInAGroup)) / numberOfStudentsInAGroup;
let remainingStudents = totalStudents % numberOfStudentsInAGroup;
console.log(`It will be ${totalGroups} groups`);
console.log(`The number of studens left wihout a group will be ${remainingStudents}.`);

//ex 15
let oneHour = 60;
let threeHours = oneHour * 3;
console.log(`In 3 hours will be ${threeHours} minutes.`);

//ex 16
let oneBatch = 2;
let fiveBatchs = 5;
let totalCups = oneBatch * fiveBatchs;
console.log(`The number of cups for 5 batches will be: ${totalCups} cups fo flour.`);

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
console.log(`Laurentiu are nota ${notaExactaLaurentiu} la lb Romana, fiind mare decat minimul ${notaMinimaTrecere}, care este de trecere.`);

// vrem sa facem un zid pe o latime de 4 metri, folosind caramizi de 1 metru latime. Daca avem 17 caramizi, vom putea avea ultimul nivel complet?
let zidLatime = 4;
let caramideLatime = 1;
let nrCaramizi = 17;
let caramiziPerLevel = zidLatime / caramideLatime;
let cateNiveleSuntFull = (nrCaramizi - (nrCaramizi % caramiziPerLevel)) / caramiziPerLevel;
console.log(cateNiveleSuntFull);
let cateCaramiziAuMaiRamas = nrCaramizi % cateNiveleSuntFull;
let UltmiulNivel = cateCaramiziAuMaiRamas === 0;
console.log(UltmiulNivel);

*/

// tema JS04 Logic & Logical Operators

// ex 1
// scenariu 1
// let xEx1 = 3;

// scenariu 2
// let xEx1 = 6;

// const lunaCurentaEx1 = xEx1;
// const lunaInCarePotiVota = 6;
// const SePoateVotaAcum = lunaCurentaEx1 === lunaInCarePotiVota;
// console.log(SePoateVotaAcum);

// ex 2

// scenariul 1
// let yEx2 = 2010;

// scenariul 2
// let yEx2 = 1990;

// const dataNastereWanda = yEx2;
// const varstaMinimaVot = 18;
// const anCurent = 2024;
// const varstaWanda = anCurent - dataNastereWanda;
// const poateSaVotezeWanda = varstaWanda >= varstaMinimaVot;
// console.log(poateSaVotezeWanda);

// ex 3
// scenariul 1
// let xEx3 = 3;
// let yEx3 = 2010;

// scenariul 2
// let xEx3 = 6;
// let yEx3 = 2010;

// scenariul 3
// let xEx3 = 6;
// let yEx3 = 1990;

// const lunaInCareSeTineVotarea = 6;
// const lunaCurenta = xEx3;
// const dataDeNastereOlek = yEx3;
// const anulCurent = 2024;
// const varstaLaCarePotiVota = 18;
// const VarstaLuiOlek = anulCurent - dataDeNastereOlek;
// const poateSaVoetezeOlek = VarstaLuiOlek >= varstaLaCarePotiVota && lunaCurenta === lunaInCareSeTineVotarea;
// console.log(poateSaVoetezeOlek);

// Tema JS05
/*
console.log(false || (0 && "Hello")); // output 0
console.log(("Text" && 42) || null); // output 42
console.log(0 || (undefined && true)); // output undefined
console.log(undefined && true); // output undefined
console.log(false && "first"); // output false
console.log(100 || (0 && null)); // output 100
console.log((null && "value") || 50); // output 50
console.log((true && "") || "fallback"); // output fallback
console.log("yes" || (false && 0)); // output yes
*/
// Exercitiu If else

// ex
/*
const isDivisible = function (x) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("fizzbuzz");
  } else if (x % 3 === 0) {
    console.log("fizz");
  } else if (x % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(x);
  }
};

isDivisible(6);
isDivisible(30);
isDivisible(10);
isDivisible(12);
isDivisible(22);
isDivisible(8);
*/

// TEMA JS06

// ex 1
/*

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("----");
// ex 2

let numar = 132;
let cifre = [];

while (numar > 0) {
  let cifra = numar % 10;
  // console.log(cifra);
  cifre.push(cifra);
  numar = (numar - cifra) / 10;
  // console.log(numar);
}

// Afișăm cifrele în ordine inversă
for (let i = cifre.length - 1; i >= 0; i--) {
  console.log(cifre[i]);
}
console.log("---");

//ex 3

let numar2 = 132;
let suma = 0;

while (numar2 > 0) {
  let cifra = numar2 % 10;
  suma += cifra;
  numar2 = (numar2 - cifra) / 10;
}

console.log(suma); // Rezultatul va fi 6
console.log("---");
// ex 4
let numar3 = 132;
let numarDeCifre = 0;

while (numar3 > 0) {
  numar3 = (numar3 - (numar3 % 10)) / 10;
  numarDeCifre++;
}

console.log(numarDeCifre); // Rezultatul va fi 3
console.log("---");
// ex 5
let string = "1251";
for (let i = 0; i < string.length; i++) {
  let cifra = string[i];
  switch (cifra) {
    case "1":
      console.log("Luni");
      break;
    case "2":
      console.log("Marti");
      break;
    case "3":
      console.log("Miercuri");
      break;
    case "4":
      console.log("Joi");
    case "5":
      console.log("Vineri");
      break;
    case "6":
      console.log("Sambata");
      break;
    case "7":
      console.log("Duminica");
      break;
    default:
      console.log("Cifra nu este un numar");
  }
}
console.log("---");
// ex 6
let sumaTotala = 0;

for (let i = 1; i < 100; i++) {
  if (i % 7 === 0) {
    // console.log(i);
    sumaTotala += i;
  }
}
console.log(sumaTotala);
console.log("---");

let produs = 1;
for (let i = 1; i < 100; i++) {
  produs *= i;
}
console.log(produs);

*/

// Tema 08 JavaScript

// ex 1

/*
let sum = 0;

for (let i = 1; i <= 15; i += 2) {
  sum += i;
  // console.log(i);
}

console.log(sum);

// ex 2
const Laura = "Salut sunt Laura";
let count = 0;

for (let i = 0; i < Laura.length; i++) {
  if (Laura[i] === "a") {
    count++;
  }
}

console.log(`Numarul de litere 'a' in string este: ${count}`);

// ex 3
let produsulNrIntregi = 1;

for (let i = 1; i <= 5; i++) {
  produsulNrIntregi *= i;
}

console.log(produsulNrIntregi);

// ex 4

function calculateCube(number) {
  return number ** 3;
}

console.log(calculateCube(7));

// ex 5

function functieLitere(str, litera) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === litera) {
      count++;
    }
  }
  return count;
}

console.log(functieLitere("alune uscate", "e"));

// ex 6

function functieProdusNumar(num) {
  let product = 1;

  if (num <= 0) {
    return "Numarul trebuie sa fie mai mic decat 0";
  }

  for (let i = 1; i <= num; i++) {
    product *= i;
  }

  return product;
}

console.log(functieProdusNumar(5));

// ex 7

const arrayEx7 = ["Salut", 2, "Dacia", "salut"];

function numarAparitii(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string" && array[i].toLowerCase() === "salut") {
      count++;
    }
  }
  return count;
}

console.log(numarAparitii(arrayEx7));

// ex 8

const arrayEx8 = [10, 20, 1, 2];

function produslNr(array) {
  let produs = 1;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      produs *= array[i];
    }
  }
  return produs;
}

console.log(produslNr(arrayEx8));

// ex 9

const arrayEx9 = ["baobab", "calculator"];

function findTheLetter(array, e) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      for (let j = 0; j < array[i].length; j++) {
        if (array[i][j].toLowerCase() === e.toLowerCase()) {
          count++;
        }
      }
    }
  }
  return count;
}

// OR

console.log(findTheLetter(arrayEx9, "a"));

function findTheLetter2(array, e) {
  let count = 0;

  array.forEach((str) => {
    if (typeof str === "string") {
      for (let j = 0; j < str.length; j++) {
        if (str[j].toLowerCase() === e.toLowerCase()) {
          count++;
        }
      }
    }
  });
  return count;
}

console.log(findTheLetter2(arrayEx9, "o"));

// ex 10
const arrrayEx10 = ["ALUNA", "PORSCHE"];

function findTheWorld(str, word) {
  return str.includes(word);
}

console.log(findTheWorld(arrrayEx10, "ALUNA"));

function operation(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
      break;
    case "-":
      return value1 - value2;
      break;
    case "*":
      return value1 * value2;
      break;
    case "/":
      return value1 / value2;
      break;
    default:
      return 0;
  }
}

console.log(operation("*", 10, 5));

// Ex 1

let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function numerePare(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      suma += arr[i];
    }
  }
  return suma;
}

console.log(numerePare(array1));

const array2 = [1, 2];

function existaSauNu(array, varibila) {
  return array.includes(varibila);
}

console.log(existaSauNu(array2, 5));

*/

// Tema JS10

//1
const numereDivisibileCu2 = [1, 2, 3, 4, 5, 6, 7, 8];

function filtreazaDivizibile(array, nr) {
  const x = [];
  array.forEach((element) => {
    if (element % nr === 0) {
      x.push(element);
    }
  });
  return x;
}

console.log(filtreazaDivizibile(numereDivisibileCu2, 2));

// ex 2
const arrayMare = [1, 2, 3, 4, 5, 6, 7, 8];
const arrayMic1 = [1, 2, 3];
const arrayMic2 = [1, 2, 13];
const arrayMic3 = [10, 13];

function verficaIncluziuneArray(arrayMare, arrayMic) {
  return arrayMic.every((element) => arrayMare.includes(element));
}

console.log(verficaIncluziuneArray(arrayMare, arrayMic1));
console.log(verficaIncluziuneArray(arrayMare, arrayMic2));
console.log(verficaIncluziuneArray(arrayMare, arrayMic3));

// ex 3

const arrayEx3 = [1, 2, 3, 4];

function eliminaElement(array, element) {
  const resultat = array.filter((e) => e !== element);
  return resultat;
}

console.log(eliminaElement(arrayEx3, 4));
