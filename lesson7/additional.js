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



const Contact = function(id, name, username, email, address, phone, website, company) {
    return {
        id,
        name,
        username,
        email,
        address,
        phone,
        website,
        company
    }
}

const Address = function(street, suite, city, zipcode, lat, lng) {
    return {
        street,
        suite,
        city,
        zipcode,
        geo: {
            lat,
            lng
        }
    }
}

const Company = function(name, catchPhrase, bs) {
    return {
        name,
        catchPhrase,
        bs
    }
}

const ContactBuilder = function() {
    let id, name, username, email, address, phone, website, company;

    return {
        id: function(value) {
            id = value;
            return this;
        },
        name: function(value) {
            name = value;
            return this;
        },
        username: function(value) {
            username = value;
            return this;
        },
        email: function(value) {
            email = value;
            return this;
        },
        address: function(value) {
            address = value;
            return this;
        },
        phone: function(value) {
            phone = value;
            return this;
        },
        website: function(value) {
            website = value;
            return this;
        },
        company: function(value) {
            company = value;
            return this;
        },
        build: function() {
            return Contact(id, name, username, email, address, phone, website, company);
        }
    }
}

const AddressBuilder = function() {
    let street, suite, city, zipcode, lat, lng;

    return {
        street: function(value) {
            street = value;
            return this;
        },
        suite: function(value) {
            suite = value;
            return this;
        },
        city: function(value) {
            city = value;
            return this;
        },
        zipcode: function(value) {
            zipcode = value;
            return this;
        },
        geo: function(latValue, lngValue) {
            lat = latValue;
            lng = lngValue;
            return this;
        },
        build: function() {
            return Address(street, suite, city, zipcode, lat, lng);
        }
    }
}

const CompanyBuilder = function() {
    let name, catchPhrase, bs;

    return {
        name: function(value) {
            name = value;
            return this;
        },
        catchPhrase: function(value) {
            catchPhrase = value;
            return this;
        },
        bs: function(value) {
            bs = value;
            return this;
        },
        build: function() {
            return Company(name, catchPhrase, bs);
        }
    }
}

const c = ContactBuilder()
    .id(1)
    .name('Leanne Graham')
    .username('Bret')
    .email('Sincere@april.biz')
    .address(AddressBuilder()
        .street('Kulas Light')
        .suite('Apt. 556')
        .city('Gwenborough')
        .zipcode('92998-3874')
        .geo('-37.3159', '81.1496')
        .build())
    .phone('1-770-736-8031 x56442')
    .website('hildegard.org')
    .company(CompanyBuilder()
        .name('Romaguera-Crona')
        .catchPhrase('Multi-layered client-server neural-net')
        .bs('harness real-time e-markets')
        .build())
    .build();

console.log(c);

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


const Tag = function(titleOfTag, action, attrs) {
    return {
        titleOfTag,
        action,
        attrs
    }
}

const Attribute = function(titleOfAttr, actionOfAttr) {
    return {
        titleOfAttr,
        actionOfAttr
    }
}

const TagBuilder = function () {
    let titleOfTag, action, attrs;

    return {
        titleOfTag: function(value) {
            titleOfTag = value;
            return this;
        },
        action: function(value) {
            action = value;
            return this;
        },
        attrs: function(values) {
            attrs = values;
            return this;
        },
        build: function() {
            return Tag(titleOfTag, action, attrs);
        }
    }
}

const AttributesBuilder = function() {
    let array = [];

    return {
        add: function(titleOfAttr, actionOfAttr) {
            array.push({titleOfAttr, actionOfAttr});
            return this;
        },
        build: function() {
            return array;
        }
    }
}

console.log(TagBuilder()
    .titleOfTag('a')
    .action('Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.')
    .attrs(AttributesBuilder()
        .add('accesskey', 'Активация ссылки с помощью комбинации клавиш.')
        .add('coords', 'Устанавливает координаты активной области.')
        .build())
    .build());

console.log(TagBuilder()
    .titleOfTag('div')
    .action('Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого. Как правило, вид блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега добавить атрибут class или id с именем селектора.')
    .attrs(AttributesBuilder()
        .add('align', 'Задает выравнивание содержимого тега <div>.')
        .add('title', 'Добавляет всплывающую подсказку к содержимому.')
        .build())
    .build());

console.log(TagBuilder()
    .titleOfTag('h1')
    .action('тег <h1> представляет собой наиболее важный заголовок первого уровня')
    .attrs(AttributesBuilder()
        .add('acceskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.')
        .add('class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.')
        .build())
    .build());

console.log(TagBuilder()
    .titleOfTag('span')
    .action('Тег <span> предназначен для определения строчных элементов документа.')
    .attrs(AttributesBuilder()
        .add('contextmenu', 'Устанавливает контекстное меню для элемента.')
        .add('lang', 'Браузер использует значение параметра для правильного отображения некоторых национальных символов.')
        .build())
    .build());

console.log(TagBuilder()
    .titleOfTag('input')
    .action('Тег <span> предназначен для определения строчных элементов документа.')
    .attrs(AttributesBuilder()
        .add('contextmenu', 'Устанавливает контекстное меню для элемента.')
        .add('lang', 'Браузер использует значение параметра для правильного отображения некоторых национальных символов.')
        .build())
    .build());

console.log(TagBuilder()
    .titleOfTag('form')
    .action('Тег <form> устанавливает форму на веб-странице. ')
    .attrs(AttributesBuilder()
        .add('action', 'Адрес программы или документа, который обрабатывает данные формы.')
        .add('name', 'Имя формы.')
        .build())
    .build());

console.log(TagBuilder()
    .titleOfTag('option')
    .action('Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.')
    .attrs(AttributesBuilder()
        .add('disabled', 'Заблокировать для доступа элемент списка.')
        .add('label', 'Указание метки пункта списка.')
        .build())
    .build());

console.log(TagBuilder()
    .titleOfTag('select')
    .action('Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором')
    .attrs(AttributesBuilder()
        .add('multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.')
        .add('size', 'Количество отображаемых строк списка.')
        .build())
    .build());
