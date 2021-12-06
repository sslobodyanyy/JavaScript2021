// - Дано список імен.
// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';

// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let name = (string, symbol) => {
//     let newArray = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol)
//         a.forEach((item) => {
//             if (item) newArray.push(item);
//         })
//         console.log(newArray.join(' '))
//     }
// }
// name(n1, '.');
// name(n2, '-');
// name(n3, '_')


    //  - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

    // let randomNumbers = (length, num) => {
    //     let array = [];
    //     for (let i = 0; i < length; i++) {
    //         array.push(Math.floor(Math.random() * num));
    //     }
    //     return array;
    // };
    // let result = randomNumbers(50, 100);
    // console.log(result);

    // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

    // let sortOne = (length, num) => {
    //     let emptyArray = [];
    //     for (let i = 1; i < length; i++) {
    //         emptyArray.push(Math.floor(Math.random() * num));
    //     }
    //     return emptyArray.sort((a, b) => a - b);
    //
    // };
    // console.log(sortOne(5, 200));
    //
    // let sortTwo = (length, num) => {
    //     let emptyArray = [];
    //     for (let i = 1; i < length; i++) {
    //         emptyArray.push(Math.floor(Math.random() * num));
    //     }
    //     return emptyArray.sort((a, b) => b - a);
    //
    // };
    // console.log(sortTwo(5, 200));

    // - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
    // відфільтрувати  його за допомоги filter, залишивши тільки парні числа

    // let randomFilter = (length, num) => {
    //     let array = [];
    //     for (let i = 0; i < length; i++) {
    //         array.push(Math.floor(Math.random() * num));
    //     }
    //     return array.filter(value => value % 2 === 0);
    // };
    // console.log(randomFilter(5, 60));

    // - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
    // за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

    // let arrayRandomNum = (length, num) => {
    //     let array = [];
    //     for (let i = 0; i < length; i++) {
    //         array.push(Math.floor(Math.random() * num));
    //     }
    //     return array.map(value => value.toString());
    // };
    // console.log(arrayRandomNum(50, 300));

    // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
    // або навпаки в залежності від значення аргументу direction.
    // let nums = [11,21,3];
    // sortNums('ascending') // [3,11,21]
    // sortNums('descending') // [21,11,3]

    // let sortNums = (arr, direction) => {
    //     if (direction === 'asc') return arr.sort((a, b) => a - b);
    //     if (direction === 'desc') return arr.sort((a, b) => b - a);
    // };
    // console.log(sortNums([11, 34, 4, 55, 1000, 14, -40, 507], 'desc') );

    // // - є масив
    // let coursesAndDurationArray = [
    //     {title: 'JavaScript Complex', monthDuration: 5},
    //     {title: 'Java Complex', monthDuration: 6},
    //     {title: 'Python Complex', monthDuration: 6},
    //     {title: 'QA Complex', monthDuration: 4},
    //     {title: 'FullStack', monthDuration: 7},
    //     {title: 'Frontend', monthDuration: 4}
    // ];
    //
    // // -- відсортувати його за спаданням за monthDuration
    //
    // let Sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
    // console.log(Sort);
    //
    //
    // // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
    //
    // let Filter = coursesAndDurationArray.filter((value) => {
    //     return value.monthDuration > 5;
    // });
    // console.log(Filter)

    // - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
    // document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

    // let cutString = (str, n) => {
    //     let array = [];
    //     while (str.length) {
    //         array.push(str.substr(0, n))
    //         str = str.slice(n)
    //     }
    //     console.log(array)
    //     return array
    // };
    // document.writeln(cutString('наслаждение', 3))

