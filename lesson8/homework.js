  // Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
    //
    //     - Напишіть код,  котрий :
    // -- отримує текст з параграфа з id "content"

    let contentId = document.getElementById('content');
    console.log(contentId.innerText);

    // -- отримує текст з блоку з id "rules"

    let contentRules = document.getElementById('rules');
    console.log(contentRules.innerText);

    // -- замініть текст параграфа з id 'content' на будь-який інший

    let contentPar = document.getElementById('content');
    contentPar.innerText = 'новый текст';
    console.log(contentPar.innerText);

    // -- замініть текст параграфа з id 'rules' на будь-який інший

    let contentParRules = document.getElementById('rules');
    contentParRules.innerText = 'будь який текст';
    console.log(contentParRules.innerText)

    // -- змініть кожному елементу колір фону на червоний

    let childrenColor = document.body.children;
    for (const child of childrenColor) {
    child.style.background = 'red';
}

    // -- змініть кожному елементу колір тексту на синій

    let childrenColorBlue = document.body.children;
    for (const child of childrenColorBlue) {
    child.style.background = 'blue';
}


    // -- отримати весь список класів елемента з id=rules і вивести їх в console.log

    let elementClass = document.getElementById('rules');
    console.log(elementClass.classList);

    // -- поміняти колір тексту у всіх елементів fc_rules на червоний

    let fcRules = document.getElementsByClassName('fc_rules');
    for (const rule of fcRules) {
    rule.style.color = 'red';
}
