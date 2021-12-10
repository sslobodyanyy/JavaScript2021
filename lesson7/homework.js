  // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone


    function User(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
    // створити пустий масив, наповнити його 10 об'єктами new User(....)

    let users = [
        new User(1, 'petya', 'ivanov', 'qweq@sfdfgdf.com', '+7545333456333'),
        new User(2, 'vasya', 'petrov', 'sdfsd@sfdddf.com', '+346346333333'),
        new User(3, 'igor', 'rgos', 'yyyyy@sfddf.com', '+67467573333'),
        new User(4, 'valya', 'sidrov', 'dfbdfb@saaaafdf.com', '+3462363547'),
        new User(5, 'olya', 'tanov', 'ttt@sfvvvdf.com', '+42574747'),
        new User(6, 'petro', 'vilkov', 'ttttdfbd@sgggfdf.com', '+27457'),
        new User(7, 'ivan', 'nazov', 'rhen@sfdjjjf.com', '+654356456'),
        new User(8, 'tolya', 'grinko', 'jklhkj@sfyyydf.com', '+456473467'),
        new User(9, 'tima', 'topko', 'ghfghq@sfyyydf.com', '+6756765'),
        new User(10, 'seg', 'prezko', 'qwfghfgheq@sfuuudf.com', '+567567567')
    ];

    // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

    let filterUsers = users.filter(value => value.id % 2 ===0);



    // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


    let sort = users.sort((a, b) => a.id - b.id );




    // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

    class Client {
        constructor(id, name, surname, email, phone, order) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
        }

    }

    // створити пустий масив, наповнити його 10 об'єктами Client

    let clients = [
        new Client(1, 'kolya', 'petrov', 'dddd@dfg.com', '+464843434', ['milk', 'bred', 'kola']),
        new Client(2, 'vasya', 'petrov', 'sdfsd@sfdddf.com', '+346346333333',['sprite', 'juice']),
        new Client(3, 'igor', 'rgos', 'yyyyy@sfddf.com', '+67467573333', ['bred', 'bag', 'window', 'monitor']),
        new Client(4, 'valya', 'sidrov', 'dfbdfb@saaaafdf.com', '+3462363547', ['bred', 'bag', 'window']),
        new Client(5, 'olya', 'tanov', 'ttt@sfvvvdf.com', '+42574747', ['bred', 'tiktok', 'window', 'monitor']),
        new Client(6, 'petro', 'vilkov', 'ttttdfbd@sgggfdf.com', '+27457', ['bred', 'bag', 'milk', 'monitor']),
        new Client(7, 'ivan', 'nazov', 'rhen@sfdjjjf.com', '+654356456', ['bred', 'bag', 'window']),
        new Client(8, 'tolya', 'grinko', 'jklhkj@sfyyydf.com', '+456473467', ['bred', 'bag', 'window', 'monitor']),
        new Client(9, 'tima', 'topko', 'ghfghq@sfyyydf.com', '+6756765', ['bred', 'milk', 'window', 'monitor']),
        new Client(10, 'seg', 'prezko', 'qwfghfgheq@sfuuudf.com', '+567567567', ['bred'])
    ]
    // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

    let sortClients = clients.sort((a,b) => a.order.length - b.order.length);

    console.log(sortClients);
