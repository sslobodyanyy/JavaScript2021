// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function newfn(first, second) {
    if (!first) {
        return
    }

    if (!second) {
        console.log(first);
    } else {
        console.log(first + second);
    }
}

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function newfn(array1, array2) {
    let length = Math.min(array1.length, array2.length);
    let output = new Array(length);

    for (let i = 0; i < length; i++) {
        output[i] = array1[i] + array2[i];
    }

    return output;
}

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function fn(array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(Object.keys(array[i]));
    }
    return flatten(output);
}

function flatten(array) {
    let output = [];
    flattenToArray(array, output);
    return output;
}

function flattenToArray(input, output) {
    if (Array.isArray(input)) {
        for (let i = 0; i < input.length; i++) {
            let value = input[i];
            if (Array.isArray(value)) {
                flattenToArray(value, output);
            } else {
                output.push(value);
            }
        }
    }
}

console.log(fn([{name: 'Dima', age: 13}, {model: 'Camry'}]));

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function fn(array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(Object.values(array[i]));
    }
    return flatten(output);
}

function flatten(array) {
    let output = [];
    flattenToArray(array, output);
    return output;
}

function flattenToArray(input, output) {
    if (Array.isArray(input)) {
        for (let i = 0; i < input.length; i++) {
            let value = input[i];
            if (Array.isArray(value)) {
                flattenToArray(value, output);
            } else {
                output.push(value);
            }
        }
    }
}
console.log(fn([{name: 'Dima', age: 13}, {model: 'Camry'}]));
