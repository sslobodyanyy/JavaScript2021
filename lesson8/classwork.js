    // Взяти файл template_2.html та працювати в ньому
    // 1) Напишіть код, який :
    // a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

    let elementById = document.getElementById('main_header');
    elementById.classList.add('sep-2021');

    // b) робить шириниу елементу ul 400px

    let elementUlWidth = document.getElementsByTagName('ul');
    elementUlWidth.style.width = '400px';

    // c) робить шириниу всіх елементів з класом linkList шириною 50%

    let elementsByClassName = document.getElementsByClassName('linkList');
    for (const link of elementsByClassName) {
    link.style.width = '50%';
}


    // d) отримує текст який зберігається в елементі з класом listElement2

    function addText(text){
    let addText = document.getElementsByClassName('listElement2');
    addText.innerText = text;

}

    // e) отримує всі елементи li та змінює ім колір фону на сірий

    let getLiGray = document.getElementsByTagName('li');
    for (const li of getLiGray){
    li.style.background = 'silver';
}

    // f) отримує всі елементи 'a' та додає їм клас anchor

    let elementsA = document.getElementsByTagName('a');
    for (const itemA of elementsA){
    itemA.classList.add('anchor');
}

    // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

    let allAList = document.getElementsByTagName('a');
    for (const a of allAList){
    if (a.innerText === 'link3') {
    a.style.fontSize = '40px'
}
}

    // h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

    let aList = document.getElementsByTagName('a');
    for (const a of aList){
    let aNew = a.innerText;
    a.classList.add(aNew);
}

    // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

    let elementsSubHeader = document.getElementsByClassName('sub-header');
    for (const sub of elementsSubHeader){
    sub.style.background = prompt('введите цвет');
}


    // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

    let elementsSubHeaderColor = document.getElementsByClassName('sub-header');
    for (const sub of elementsSubHeaderColor){
    if (sub.innerText === 'content 2 segment'){
    sub.style.color = prompt('введите цвет текста');
}
}

    // k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

    let getContent1 = document.getElementsByClassName('content_1');
    for (const item of getContent1){
    item.innerText = prompt('введите текст');
}

    // l) отримати елементи p та змінити їм padding на 20px

    let elementsP = document.getElementsByTagName('p');
    for (const p of elementsP){
    p.style.padding = '20px';
}

    // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

    let elemText2 = document.getElementsByClassName('text2');
    for (const item of elemText2){
        item.innerText = 'sep-2021';
}
