/*Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:
  отримати від користувача через три prompt три числа
  показати через alert середнє арифметичне цих чисел */

const firstNumber = +prompt('Input first number');
const secondNumber = +prompt('Input second number');
const thirdNumber = +prompt('Input third number');

alert((firstNumber + secondNumber + thirdNumber) / 3);