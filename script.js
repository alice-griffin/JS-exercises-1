//Conditions Exercise 1:

const actualTemp = 75;
const desiredTemp = 75;

if (actualTemp > desiredTemp) {
    console.log('Run A/C');
} else if (desiredTemp > actualTemp) {
    console.log('Run heat');
} else if (actualTemp === desiredTemp) {
    console.log('Standby');
}


const tempCelsius = parseInt(prompt('Enter Celsius'));
const targetUnit = prompt("Enter in C, K, or F");
let finalTemp;

switch(targetUnit) {
    case "C":
        finalTemp = tempC;
        console.log(finalTemp);
        break;
    case "K":
        finalTemp = tempC + 273.15;
        console.log(finalTemp);
        break;
    case "F":
        finalTemp = (tempC * (9/5)) +32;
        console.log(finalTemp);
        break;
    default: 
    console.log("Error: Type in C, K, or F.")
}

//Loops exercise 1: 

for (let i = 10; i > 0; i--) {
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 10;
    while (i > 0) {
    console.log(i);
    i--;
}

let i = 0;
while (i < 11) {
    console.log(i);
    i++; 
}

let i = 0;
do {
    console.log(i);
    i++
}
while (i < 11)

let i = 10;
do {
    console.log(i);
    i--
}
while (i > 0)

let number = 0;
do {
    number = parseInt(prompt('Enter a number or 0 to quit.'));
} while (number != 0);


const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 10]

for (let numerical of numbers) {
console.log(numerical)
}

// Conditions exercise 2:

const name1 = 'Ali';
const name2 = 'Bob';
const name3 = 'Cat';

const name1Length = name1.length;

const name2Length = name2.length;

const name3Length = name3.length;

if (name1Length > name2Length && name3Length) {
    console.log(name1 + ' has the longest name.')
} else if (name2Length > name1Length && name3Length) {
    console.log(name2 + ' has the longest name.')
} else if (name3Length > name1Length && name2Length) {
    console.log(name3 + ' has the longest name.')
} else if (name1Length === name2Length) if (name3Length < name1Length && name2Length) {
    console.log(name1 + ' ', 'and', name2 +' are tied for the longest name.')
} else if (name2Length === name3Length) if (name1Length < name2Length && name3Length) {
    console.log(name2 + ' ', 'and', name3 + ' are tied for the longest name.') 
} else if (name3Length === name1Length) if (name2Length < name1Length && name3Length) {
    console.log(name1 + ' ', 'and', name3 + ' are tied for the longest name.') 
} else if (name1Length === name2Length) if (name2Length === name3Length) {
    console.log(name1 + ' ' + name2 + ' and ' + name3 + ' are all tied for the same length.')
}


