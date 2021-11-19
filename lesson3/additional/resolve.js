/* 1. Створити пустий масив та : */

 let array =[]; 
/*        a. заповнити його 50 парними числами за допомоги циклу. */
let array =[];
    for (let i=0; i < 50; i++) {
        if(i % 2 ===0) {
            array[i]=i;
        };
    } 
        console.log(array);  

/*b. заповнити його 50 непарними числами за допомоги циклу.   */
let array =[];
    for (let i=0; i<50; i++){
        if (!(i % 2 ===0)) {
            array[i]= i;
        };
        console.log(array);
    }

       
/*        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)  */
let array =[];
for (let i =0; i < 20; i++){
    array[i] = Math.floor(Math.random() * 20);
}
console.log(array);    



 /*       d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS) */
let array =[];
for (let i = 0; i < 20; i++){
    array[i] = Math.floor((Math.random()*(732-8))+8);
}
console.log(array);    

 /* 2. Вивести за допомогою console.log кожен третій елемен */
let array =[];
for (i = 2; i < array.length; i+= 3) {
    
}
console.log(array[i]);



 /* 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.*/
let array =[];
for (i = 2; i < array.length; i+= 3) {
    if (array[u]%2 === 0){
        console.log(array[i]);
}
};   


 /* 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив */
let array =[];
let array1 = [];
for (i = 2 ; i < array.length; i+=3){
    if (array[1] % 2 === 0){
       array1.push(array[i]);
    }
};
console.log(array1);


/*  5. Вивести кожен елемент масиву, сусід справа якого є парним 
  EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56 */

let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];

  for (let i = 0; i < array.length; i++) {
    let nextIndex = i + 1;
  
    if (nextIndex < array.length && array[nextIndex] % 2 === 0) {
      console.log(array[i]);
    }
  }


/*  6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек. */

let arrayNumbers = [100,250,50,168,120,345,188];
let avr = 0;
for (i = 0; i < arrayNumbers.length; i++){
    avr = avr + arrayNumbers[i];
};
console.log(avr);
avr = +avr / arrayNumbers.length;
console.log(avr);


 /* 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.*/

array = [100,250,50,168,120,345,188];
let xxx = [];
for (i = 0; i < array.length; i++){
    xxx.push(array[i] *5);
};
console.log(xxx); 

/*  8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.*/

 array = ["okten", 55, true, 100, 4.5];
 let xxx = [];
 for (i = 0; i < array.length; i++){
     if (typeof array[u] === `number`){
         xxx.push(array[i])
     }
 };
 console.log(xxx); 

/* - Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];
let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
Записати цей об'єкт в новий масив
Example:
let usersWithCities = [
    {
        id: 1, // <===
        name: 'vasya',
        age: 31,
        status: false,
        address: {
            user_id: 1, // <===
            country: 'Ukraine',
            city: 'Ternopil'
        }
    },
    // TO BE CONTINUED .....
] */

for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id){
            user.address = city;
        }
    }
};


/* - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.*/

num = [25,7,30,18,2,-50,40,66,90,-14];
for (let i = 0; i < num.length; i++){
    if (num[i]%2 === 0){
        console.log(num[i]);
    }
}; 

/* - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший. */

num = [25,7,30,18,2,-50,40,66,90,-14];
let num1 = [];
for (let i = 0; i < numbers.length; i++){
    num1.push(nums[i])

};
console.log(num1);

/* - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.*/

 let array = [ 'a', 'b', 'c'];
let  xxx = "";
for (i = 0; i < array.length; i++){
    xxx = xxx + array[i];
};
console.log(xxx); 


/* - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово. */
 let array = [ 'a', 'b', 'c'];
 str = "";
 let i = 0;
while (i < array.length) {
    str = str + array[i];
    i++;
};
console.log(str); 
/* - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.      */

array = [ 'a', 'b', 'c'];
str = "";
for (const string of array){
    str = str + string;
}
console.log(str); 
