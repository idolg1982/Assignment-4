//STEP 1
function halfNumber(number){
    return `Half of ${number} is ${number/2}`;
}

const halfNumberArrow = (number) => `Half of ${number} is ${number/2}`;
//STEP 2
function squareNumber(number){
return `The result of squaring the number ${number} is ${number * number}`;
}

const squareNumberArrow = (number) => `The result of squaring the number ${number} is ${number * number}`;


//STEP 3
function percentOf(number1, number2){
    return `${number2} is ${(number2 / number1) *100}% of ${number1}`;
}

const percentOfArrow = (number1, number2) => `${number2} is ${(number2 / number1) *100}% of ${number1}`;
//STEP 4
function findModulus(number1, number2){
    return `${number1 % number2} is the modulus of ${number2} and ${number1}`;
}

const findModulusArrow = (number1, number2) => `${number1 % number2} is the modulus of ${number2} and ${number1}`;

//STEP 5

console.log(halfNumber(5));
console.log(halfNumberArrow(10));
console.log(squareNumber(3));
console.log(squareNumberArrow(5));
console.log(percentOf(20, 4));
console.log(percentOfArrow(10,2));
console.log(findModulus(4, 10));
console.log(findModulusArrow(5, 28));