/*Створити скрипт який повинен виконувати наступне:

  питаємо у користувача, що він хоче зробити (add, sub, mult, div);
питаємо у користувача перше число;
запитуємо у користувача друге число;
виводимо результат дії (add, sub, mult, div) з усіма операндами (Наприклад "2 + 3 = 5").*/


const mathSymbol = prompt('Введіть знак матиматичної операції:');
const firstNumber = +prompt('Введіть перше число:');
const secondNumber = +prompt('Введіть друге число:');

if (!isNaN(firstNumber) || !isNaN(secondNumber)) {
  switch (mathSymbol) {
    case '+' :
      const add = firstNumber + secondNumber;
      console.log(`${firstNumber} + ${secondNumber} = ${add}`);
      break;
    case '-' :
      const sub = firstNumber - secondNumber;
      console.log(`${firstNumber} - ${secondNumber} = ${sub}`);
      break;
    case '*' :
      const mult = firstNumber * secondNumber;
      console.log(`${firstNumber} * ${secondNumber} = ${mult}`);
      break;
    case '/' :
      if(firstNumber !== 0 && secondNumber !== 0) {
        const div = firstNumber / secondNumber;
        console.log(`${firstNumber} / ${secondNumber} = ${div}`);
        break;
      }else{
        alert('На ноль ділити не можна, або не можно ділити ноль...');
      }
  }
}else{
  alert('Будь ласка введіть коректні числа!');
}