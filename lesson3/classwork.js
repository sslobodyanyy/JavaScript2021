<!-- зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18] -->

let arrayOfNumbers = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];


/*    1. перебрати його циклом while */

let i = 0;
    while (i < arrayOfNumbers.length) {
        console.log(arrayOfNumbers[i]);
        i ++;
    } 

/* 2. перебрати його циклом for */

for (let i = 0; i < arrayOfNumbers.length; i++) {
    const arrayOfNumbersItem = arrayOfNumbers[i];
    console.log(arrayOfNumbersItem);
    
} 

/* 3. перебрати циклом while та вивести  числа тільки з непарним індексом */

let i = 0;
    while (i < arrayOfNumbers.length) {
        if (i % 2 === 0) {
         console.log(arrayOfNumbers[i]);  
        }
        i ++;
    }


/* 4. перебрати циклом for та вивести  числа тільки з непарним індексом */
for (let i = 0; i < arrayOfNumbers.length; i++) {
    const arrayOfNumbersItem = arrayOfNumbers[i];
    if (arrayOfNumbersItem % 2 === 0) {
        console.log(arrayOfNumbersItem);
    }
    
} 

/* 5. перебрати циклом while та вивести  числа тільки парні  значення */
let i = 0;
    while (i < arrayOfNumbers.length) {
        if(i % 3 === 0) {
            console.log(arrayOfNumbers[i]);
        }
        i ++;
    }


/* 6. перебрати циклом for та вивести  числа тільки парні  значення */

for (let i = 0; i < arrayOfNumbers.length; i++) {
    const item = arrayOfNumbers[i];
    if (item % 3 === 0) {
        console.log(item);
    }
    
} 

/* 7. замінити кожне число кратне 3 на слово "okten" */
for (let xxx of arrayOfNumbers) {
    
    if (xxx % 3 === 0) {
        xxx = 'okten';
    }
}



/* 8. вивести масив в зворотньому порядку. */

let i = arrayOfNumbers.length;
    while (i >= 0) {
        console.log(i);
        i --;
    } 

  /*  9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) */
 
  for (let i = arrayOfNumbers.length -1; i >= 0; i--) {
        console.log(i);
    
} 


 let i = arrayOfNumbers.length;
    while (i --) {
        if(i % 2 === 0)
                console.log(arrayOfNumbers[i]);
  
    } 

for (let i = arrayOfNumbers.length -1; i >=0; i--) {
    if(i % 2 ===0) {
        console.log(arrayOfNumbers[i]);
    }
    
    
} 

 
 let i = arrayOfNumbers.length;
    while (i --) {
        if(i % 3 === 0)
                console.log(arrayOfNumbers[i]);
  
    } 


 for (let i = arrayOfNumbers.length -1; i >=0; i--) {
    if(i % 3 ===0) {
        console.log(arrayOfNumbers[i]);
    }

let i = arrayOfNumbers.length;
while(i > 0) {
    let item = arrayOfNumbers[i];
    
    if(item % 3 === 0) {
      arrayOfNumbers[i] = 'okten';
    }

    i--;
}
console.log(arrayOfNumbers); 
