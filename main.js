/*Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
Користувач ввів 2 і 2:
2+2=4
2-2=0
2*2=4
2/2=1 */


const firstNumber = +prompt('Input first number');
const secondNumber = +prompt('Input second number');

const addition = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;

alert(`
${firstNumber} + ${secondNumber} = ${addition}
${firstNumber} - ${secondNumber} = ${subtraction}
${firstNumber} * ${secondNumber} = ${multiplication}
${firstNumber} / ${secondNumber} = ${division}
`);