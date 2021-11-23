// - Дано натуральное число n. Выведите все числа от 1 до n.

    function fn(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

fn(12);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

  function fn(a, b) {
    if (a < b) {
        fnAbs(a, b);
    } else {
        fnDesc(a, b);
    }
}
function fnAbs(a, b) {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}
function fnDesc(a, b) {
    for (let i = a; i >= b; i--) {
        console.log(i);
    }
}
fn(10, 20);
fn(10, 1);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

function fn(array, i) {
    if (i >= array.length - 1) {
        return array;
    }
    let value = array[i];
    let nextValue = array[i + 1];

    array[i + 1] = value;
    array[i] = nextValue;

    return array;
}

console.log(fn([9,8,0,4], 0));
console.log(fn([9,8,0,4], 1));
console.log(fn([9,8,0,4], 2));


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


function fn(array) {
    let arr1 = [];
    let arr2 = [];

    for (let i = 0; i < array.length; i++) {
        const value = array[i];

        if (value === 0) {
            arr2.push(value);
        } else {
            arr1.push(value);
        }
    }

    for (let n = 0; n < arr2.length; n++) {
        arr1.push(arr2[n]);
    }

    return arr1;
}

console.log(fn([1,0,6,0,3]));
console.log(fn([0,1,2,3,4]));
console.log(fn([0,0,1,0]));



