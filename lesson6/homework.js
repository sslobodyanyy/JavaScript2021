// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let lengthOne = 'hello world';
// let upOne = lengthOne.toLocaleUpperCase();
// console.log(upOne);
//
// console.log('lorem ipsum'.toUpperCase());
//
// let lengthEmpty = 'javascript is cool';
// let upEmpty = lengthEmpty.toUpperCase();
// console.log(upEmpty);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let lengthOne = 'HELLO WORLD';
// let lowerOne = lengthOne.toLowerCase();
// console.log(lowerOne);
//
// console.log('LOREM IPSUM'.toLowerCase());
//
// let lengthTwo = 'JAVASCRIPT IS COOL';
// let lowerTwo = lengthTwo.toLowerCase();
// console.log(lowerTwo);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let dirtyString = ' dirty string   ';
// let converted = dirtyString.trim();
// console.log(converted);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

// let str = 'Каждый охотник желает знать';
// function stringToArray (str) {
//     let split = str.split(' ');
//     return split;
// }
// stringToArray(str);
// console.log(stringToArray(str));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//   let str = 'Каждый охотник желает знать';
//    document.writeln(delete_characters(str, 7)); // Каждый


// function delete_characters (str, length) {
//     return str.substr(0, length)
// }
//  let str = 'Каждый охотник желает знать';
//  document.writeln(delete_characters(str, 10));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.\
// При цьому всі символи рядка необхідно перевести у верхній регістр.
// //    let str = "HTML JavaScript PHP";
// //document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//

// function insert_dash (str) {
//     return str.split(' ').join('-').toUpperCase();
// }
// let string = "HTML JavaScript PHP";
// console.log(insert_dash(string));

// - Напишіть функцію, яка приймає ряд
// ок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
// let firstUp = (str) => {
//     return str[0].toUpperCase() + str.slice(1)
// };
// console.log(firstUp('vasya pupkin'));


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// document.write(capitalize('okten hi you are welcome'));
// console.log(capitalize('okten hi you are welcome'));
