/* --створити масив з:
- з 5 числових значень
- з 5 стічкових значень
- з 5 значень стрічкового, числового та булевого типу
- та вивести його в консоль*/

let num = [10, 20, 30, 40, 50];
console.log([1]);
console.log([2]);
console.log([3]);
console.log([4]);
console.log([5]);

let str = ['logo', 'name', 'afisha', 'login', 'pass']
console.log(str); 

/* -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль */

let array = [];
array[0] = 'name';
array[1] = 31;
array[2] = true;

console.log(array); 

/* - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині */

for (let i = 0; i < 10; i++) {
    document.write(`<div>` + 'okten' + `</div>`);

}

/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині */

for (let i = 0; i < 10; i++) {
    document.write(`<div>` + 'index ' + i + `</div>`);
    
}

/* - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/

let i = 0;
while (i < 20) {
    document.write('<h1>' + i + '</h1>')
    i++;
} 

 /* - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.   */


let i = 0;
while (i < 20) {
    document.write('<h1>' + 'number ' + i + '</h1>')
    i++;
} 



/* - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.*/

 let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < num.length; i++) {
        const xxx = num[i];
        console.log(xxx);
        
    }  
=======
 for (let xxx of num) {
    console.log(num);
} 
=======
 let i =0;
    while (i < num.length) {
        const xxx = num[i];
        console.log(xxx);
        i++;
    } 

/* - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.*/

let str = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'k', 'l'];
    for (let i = 0; i < str.length; i++) {
        const xxx = str[i];
        console.log(xxx);
        
    } 

/* - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.*/

 let array = [1, 'hello', true, 23, 45, 'world', false, 560, 'okten', true];
    for (let i = 0; i < array.length; i++) {
        const xxx = array[i];
        console.log(xxx);
        
    } 



/* - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи*/

 let array = [1, 'hello', true, 23, 45, 'world', false, 560, 'okten', true];
    for (let i = 0; i < array.length; i++) {
        const xxx = array[i];
        if (typeof xxx === "boolean") {
            console.log(xxx);
        }
    }


/*   - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи */

let array = [1, 'hello', true, 23, 45, 'world', false, 560, 'okten', true];
    for (let i = 0; i < array.length; i++) {
        const xxx = array[i];
        if (typeof xxx === "number") {
           console.log(xxx); 
        }
   }

/* - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи */

let array = [1, 'hello', true, 23, 45, 'world', false, 560, 'okten', true];
for (let i = 0; i < array.length; i++) {
    const xxx = array[i];
    if (typeof xxx === "string") {
       console.log(xxx); 
    }
    
}

/* - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.*/

let array = [1, 'hello', true, 23, 45, 'world', false, 560, 'okten', true];

/*- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write*/

for (let i = 0; i < 10; i++) {
    console.log(i)
}

/*- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write */


for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i}`);
    
}

/* - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write */


for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(`${i}`);
}

/* - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write */

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0 && i !== 0) {
       console.log(i); 
    }
    
}

/* - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write   */ 

for (let i = 0; i < 100; i++) {
    if(i % 3 === 0 && i !== 0) {
        console.log(i);
    }
    
} 
