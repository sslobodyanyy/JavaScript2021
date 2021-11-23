// - створити функцію яка обчислює та повертає площу прямокутника

let sOfRect = (a, b) => {
    let result = a * b;
    return result;
}
console.log(sOfRect(10,10));



// - створити функцію яка обчислює та повертає площу круга

let sCircle = (r) => {
    result = 3.14 * (r * r);
    return result;
}
console.log(sCircle(5));

// //- створити функцію яка обчислює та повертає площу циліндру S= 2πRH

let areaSCylinder = (r, h) => {
    let sCylinder = 2 * 3.14 * r * h;
    return sCylinder;
}
console.log(areaSCylinder(5,20))

// //- створити функцію яка приймає масив та виводить кожен його елемент

let array = [10,'okten',-6,100,'owu'];
let dataArray = (array) => {
    for (let i = 0; i < array.length; i++) {
       document.write(array[i])
    }
}
dataArray(array);

// //- створити функцію яка створює параграф з текстом. Текст задати через аргумент

let createParText = (text) => {
    document.write(`<p>${text}</p>`)
    document.write(`<hr>`)
    for (let i = 0; i <= 20; i++) {
        document.write(`<p>${i} - ${text}</p>`)
    }
    document.write(`<hr>`)
    document.write(`<p>${text}</p>`)
}
createParText('hello okten')


// //  - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

    let createUl = (arg) => {
    document.write(`<ul>`)
    document.write(`<li>${arg}</li>`)
    document.write(`<li>${arg}</li>`)
    document.write(`<li>${arg}</li>`)
    document.write(`</ul>`)
}
createUl('Hello World');

// // - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let createUlDinamic = (text, num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
createUlDinamic('Hello World', 3)


// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let newArray = [150,'Stepan Giga', false, 'Ivo Bobul'];
let primitives = (array) =>{
    document.write(`<ol>`)
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ol>`)
}
primitives(newArray);


// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let newArray = [{id: 1, name: 'Vasya', age: 30}, {id: 2, name: 'Ivan', age: 25}, {id: 3, name: 'Viktor', age: 35}];
let objArray = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}
objArray(newArray);


