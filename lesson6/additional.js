//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]


    function cutString(str, n) {
        const result = [];
    
        for (let i = 0; i < str.length; i += n) {
        const value = str.substr(i, n);
        result.push(value);
        }
    
        return result;
    }
    
    console.log(cutString('наслаждение', 3));  


//- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
Протестувати на значеннях
someemail@gmail.com
someeMAIL@gmail.com
someeMAIL@i.ua
some.email@gmail.com

Примітка
Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


    function validate(email) {
        return validateDivider(email) && validateName(email) && validateDomain(email);
    }
    
    function validateDivider(email) {
        return email.includes("@");
    }
    
    function validateName(email) {
        const index = email.indexOf('@');
        
        if (index < 0) return false;
    
        return email.substring(0, index).length > 0;
    }
    
    function validateDomain(email) {
        const index = email.indexOf('@');
    
        if (index < 0) return false;
    
        const domain = email.substring(index + 1, email.length);
        const dotIndex = domain.indexOf('.');
    
        return  dotIndex > 1;
    }
    
    console.log(validate('someemail@gmail.com'));
    console.log(validate('someeMAIL@gmail.com'));
    console.log(validate('someeMAIL@i.ua'));
    console.log(validate('some.email@gmail.com'));
  

- є масивlet coursesArray = [
             {
                 title: 'JavaScript Complex',
                 monthDuration: 5,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
             },
             {
                 title: 'Java Complex',
                 monthDuration: 6,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'angular',
                     'aws',
                     'docker',
                     'git',
                     'java core',
                     'java advanced']
             },
             {
                 title: 'Python Complex',
                 monthDuration: 6,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'angular',
                     'aws',
                     'docker',
                     'python core',
                     'python advanced']
             },
             {
                 title: 'QA Complex',
                 monthDuration: 4,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
             },
             {
                 title: 'FullStack',
                 monthDuration: 7,
                 hourDuration: 909,
                 modules: ['html',
                     'css',
                     'js',
                     'mysql',
                     'mongodb',
                     'react',
                     'angular',
                     'aws',
                     'docker',
                     'git',
                     'node.js',
                     'python',
                     'java']
             },
             {
                 title: 'Frontend',
                 monthDuration: 4,
                 hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
             }
         ];


відсортувати його в спадаючому порядку за кількістю елементів в полі modules

    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];
    
    for (let i = 0; i < coursesArray.length; i++) {
        const value = coursesArray[i];
        console.log(value.modules.length);
    }

    console.log();

    coursesArray.sort((a, b) => {
        return b.modules.length - a.modules.length;
    });

    console.log();

    for (let i = 0; i < coursesArray.length; i++) {
        const value = coursesArray[i];
        console.log(value.modules.length);
    }

- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
let symb = "о", str = "Астрономия это наука о небесных объектах";
document.writeln(count(str, symb)) // 5


    function count(str, symb) {
        let n = 0;
    
        for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === symb) {
            n++;
        }
        }
    
        return n;
    }
    
    console.log(count('Астрономия это наука о небесных объектах', 'о'));
  

//- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
let str = "Сила тяжести приложена к центру масс тела";
document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'


    function cutString(str, n) {
        const array = str.split(' ');
    
        if (array.length < n) return str;
        array.splice(n, str.length - n);
    
        return array.join(' ');
    }
    
    console.log(cutString('Сила тяжести приложена к центру масс тела', 5));
  
