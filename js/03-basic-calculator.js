// ADD A FUNCTION CALLED CALCULATE
function Calculate(num1, num2, oper){
    switch (oper){
        case '+':
            window.alert(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case '-':
            window.alert(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case '/':
            window.alert(`${num1} / ${num2} = ${num1 / num2}`);
            break;
        case '*':
            window.alert(`${num1} * ${num2} = ${num1 * num2}`);
            break;                   
    }
}
let firstNumber, secondNumber, operator;
do{
// COLLECT FIRST NUMBER FROM USER

firstNumber = parseFloat(prompt("Enter the first number")); 
if(isNaN(firstNumber)){
    alert("Invalid input. Please enter a valid number.");
    continue;
}
// COLLECT SECOND NUMBER FROM USER
secondNumber = parseFloat(prompt("Enter the second number"))
if(isNaN(secondNumber)){
    alert("Invalid input. Please enter a valid number.");
    continue;
}
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
operator = prompt("What operation do you want to perform +, -, /, *")
if(operator !== '+' && operator !== '-' && operator !== '/' && operator !== '*'){
    alert("Invalid operator; Please enter +, -, /, *"); 
    continue;
}
}while (operator !== '+' && operator !== '-' && operator !== '/' && operator !== '*')
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
Calculate(firstNumber,secondNumber, operator);

