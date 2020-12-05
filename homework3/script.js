"use strict";
/** 1) С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
...
10 – четное число
Для решения этой задачи используйте остаток от деления на 2, подробнее здесь
https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators */

function task1() {
    var operationName = { rezNull: "Это ноль", rezEven: "Четное число", rezNotEven: "Нечетное число" };
    for (let i = 0; i <= 10; i++) {
        let str;
        if (i == 0) {
            str = operationName.rezNull;
        } else if (i % 2 == 0) {
            str = operationName.rezEven;
        } else if (i % 2 > 0) {
            str = operationName.rezNotEven
        }
        let rezstr = `${i} - ${str}`
        console.log(rezstr)
    }
}

/** 2)Выведите в консоль значения, указанные рядом с комментариями: */
function task2(params) {
    const post = {
        author: "John", //вывести этот текст
        postId: 23,
        comments: [{
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                    likes: 10,
                    dislikes: 2 //вывести это число
                }
            },
            {
                userId: 5, //вывести это число
                userName: "Jane",
                text: "lorem ipsum 2", //вывести этот текст
                rating: {
                    likes: 3,
                    dislikes: 1
                }
            },
        ]
    };
    console.log(post.author)
    post.comments.forEach(function(item) {
        if (item.userId == 10) {
            console.log(`dislikes ${item.rating.dislikes}`);
        } else if (item.userId == 5) {
            console.log(`userId ${item.userId}, text ${item.text}`);

        }
    });
    console.log("papa")
}
/** 3)  Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
 */


function task3() {
    const products = [{
            id: 3,
            price: 200,
        },
        {
            id: 4,
            price: 900,
        },
        {
            id: 1,
            price: 1000,
        },
    ];
    products.forEach(function(item) {
        item.price += item.price * 0.15;
    });
    console.log(products);
}

/** 4) Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
1. Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0 */

function task4() {
    const products = [{
            id: 3,
            price: 127,
            photos: [
                "1.jpg",
                "2.jpg",
            ]
        },
        {
            id: 5,
            price: 499,
            photos: []
        },
        {
            id: 10,
            price: 26,
            photos: [
                "3.jpg"
            ]
        },
        {
            id: 8,
            price: 78,
        },
    ];

    // 1. Получить все товары, у которых есть фотографии 
    let foto = products.filter(function(item) {
        return item.photos !== undefined && item.photos.length > 0
    })
    console.log(foto);
    // 2. Отсортируйте товары по цене (от низкой цены к высокой),
    products.sort(function(a, b) {
        return a.price - b.price
    })
    console.log("sort", products[0]);
    products.reverse();
    console.log("revers ", products[0]);
    console.log("end");

}

/** 5. (По желанию, т.к. такая особенность практически не используется) Вывести с помощью цикла for числа от 0 до 9,
НЕ используя тело цикла */
function task5() {
    for (let i = 0; i < 10; console.log(i), i++);
    console.log("end");
}

/** 6. Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx */

function task6() {
    for (let i = 1; i <= 20; i++) {
        let xxx = new Array(i);
        xxx.fill("x", 0, i)
        console.log(xxx);
    }
    console.log("end");
}

// task1();
// task2();
// task3();
// task4();
// task5();
// task6();