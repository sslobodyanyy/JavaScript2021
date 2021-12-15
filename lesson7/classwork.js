

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function car(model, manufacturer, year, maxSpeed, volume ) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function () {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.year},
             максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume}`)
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.yaer = newValue;
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class classCar {
    constructor(model, manufacturer, year, maxSpeed, volume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    info () {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.year},
             максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.volume}`)
    }
    increaseMaxSpeed (newSpeed) {
        this.increaseMaxSpeed = newSpeed;
    }
    changeYear (newValue) {
        this.year = newValue;
    }
    addDriver (driver) {
        this.addDriver = driver;
    }

}


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}
let cinderellas = [
    new cinderella('Cinderella1', 15, 36,),
    new cinderella('Cinderella2', 17, 38,),
    new cinderella('Cinderella3', 19, 37,),
    new cinderella('Cinderella4', 21, 34,),
    new cinderella('Cinderella5', 22, 36,),
    new cinderella('Cinderella6', 16, 33,),
    new cinderella('Cinderella7', 19, 40,),
    new cinderella('Cinderella8', 20, 39,),
    new cinderella('Cinderella9', 23, 37,),
    new cinderella('Cinderella10', 25, 41,)
];



// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let prince = new prince('Artur', 35, 37);

let cinderellaShoe = cinderellas.find(value => value.size === prince.shoe);
