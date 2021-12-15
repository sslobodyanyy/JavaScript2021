//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }



const contact = function(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
  return {
    id,
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: {
        lat,
        lng
      }
    },
    phone,
    website,
    company: {
      name: companyName,
      catchPhrase,
      bs
    }
  }
}

const c1 = contact(
  1,
  'Leanne Graham',
  'Bret',
  'Sincere@april.biz',
  'Kulas Light',
  'Apt. 556',
  'Gwenborough',
  '92998-3874',
  '-37.3159',
  '81.1496',
  '1-770-736-8031 x56442',
  'hildegard.org',
  'Romaguera-Crona',
  'Multi-layered client-server neural-net',
  'harness real-time e-markets'
);

console.log(c1);
// =========================================================
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


const tag = (titleOfTag, action, ...attrs) => {
  return {
    titleOfTag,
    action,
    attrs
  }
}

const attr = (titleOfAttr, actionOfAttr) => {
  return {
    titleOfAttr,
    actionOfAttr
  }
}

const t1 = tag(
  'a',
  'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.',
  attr('accesskey', 'Активация ссылки с помощью комбинации клавиш.'),
  attr('coords', 'Устанавливает координаты активной области.')
);

console.log(t1);
const t2 = div(
  'div',
  'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.'  attr('accesskey', 'Активация ссылки с помощью комбинации клавиш.'),
  attr('align', 'Задает выравнивание содержимого тега <div>.')
);
console.log(t2);
const t3 = h1(
  'h1',
  'тег <h1> представляет собой наиболее важный заголовок первого уровня'  attr('accesskey', 'Активация ссылки с помощью комбинации клавиш.'),
   attr('acceskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.')
);
console.log(t3);

const t4 = span(
  'span',
  'Тег <span> предназначен для определения строчных элементов документа.',
   attr('contextmenu', 'Устанавливает контекстное меню для элемента.')
);
console.log(t4);

const t5 = input(
  'input',
  'Тег <input> предназначен для определения строчных элементов документа.',
   attr('lang', 'Браузер использует значение параметра для правильного отображения некоторых национальных символов.')
);
console.log(t5);

const t6 = form(
  'form',
  'Тег <form> устанавливает форму на веб-странице. ',
   attr('action', 'Адрес программы или документа, который обрабатывает данные формы.')
);
console.log(t6);

const t7 = option(
  'option',
  'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
   attr('action', 'Адрес программы или документа, который обрабатывает данные формы.')
);
console.log(t7);

const t8 = select(
  'select',
  'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором',
   attr('multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.')
);
console.log(t8);
