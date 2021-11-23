// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let numMin = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {
        document.write(num1);
        console.log(num1);
    } else if (num2 < num3 && num2 < num1) {
        console.log(num2);
        document.write(num2);
    } else {
        console.log(num3);
        document.write(num3);
    }
};
numMin(100, 300, 500);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let numMax = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        document.write(num1);
        console.log(num1);
    } else if (num2 > num3 && num2 > num1) {
        console.log(num2);
        document.write(num2);
    } else {
        console.log(num3);
        document.write(num3);
    }
};
numMax(1000, 400, 250);

// - створити функцію яка повертає найбільше число з масиву

let maxArray = [100,12,43,7,10,890,1000,34,7800]
let arrayMax = (array) => {
    let max = array[0];
    for (const element of array) {
        if(element > max){
            max = element;
        }
    }
    return max;
}
console.log(arrayMax(maxArray));
document.write(`<h2>Самый большой эллемент массива: ${arrayMax(maxArray)}</h2>`)


// - створити функцію яка повертає найменьше число з масиву

let minArray = [346,54,44,2,6456,-100,40060,6,600]
let arrayMin = (array) => {
    let min = array[0];
    for (const element of array) {
        if(element < min){
            min = element;
        }
    }
    return min;
}
console.log(arrayMin(minArray));
document.write(`<h2>Самый меньший элемент: ${arrayMin(minArray)}</h2>`)


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumArray = [1,2,3,4];
let sumElement = (array) =>{
    let sum = 0;
    for (const arrayElement of array) {
       sum += arrayElement;
    }
    return sum;
}
document.write(sumElement(sumArray))


// // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let averageArray = [1,2,3];
let average = (array) => {
    let sum = 0;
    for (const arrayElement of array) {
        sum += arrayElement;
    }
    return sum/array.length;
}
document.write(average(averageArray))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMax = (arg) => {
    let min = arguments[0];
    let max = arguments[0];
    for (const element of arguments) {
        if (element > max) {
            max = element;
        }
        if (element < min) {
            min = element;
        }
    }
    console.log("максимальное число:", max);
    return min;
}
document.write('Мінімальне число з введених: ' + minMax(100, 20, 3, 100, 2021))

// - створити функцію яка заповнює масив рандомними числами

    let funRandom = (length) => {
    let arrayEmpty = [];
    for (let i = 0; i < length; i++){
        arrayEmpty.push(Math.floor(Math.random()*100));
    }
    return arrayEmpty;
};

document.write(funRandom(5))


// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

    let randomNumbers = (length,limit) => {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.round(Math.random() * limit));
    }
    return emptyArray;
}
document.write(randomNumbers(20,200));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let reverseArray = (arr) => {
    let newArray = [];
    for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArray[ri] = newArray[i];
    }

    return newArray;
}
