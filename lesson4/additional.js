- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function fn(first, second) {
  if (!first) { return }

  if (!second) {
    console.log(first);
  } else {
    console.log(first + second);
  }
}
- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
  EXAMPLE:
  [1,2,3,4]
  [2,3,4,5]
  результат
  [3,5,7,9]

- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
  EXAMPLE:
  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
  EXAMPLE:
  [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

