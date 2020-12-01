"use strict";


/** 1.1
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который принимает
параметры name и price, сохраните их как свойства объекта. Также объекты типа Product должны иметь метод
make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод
make25PercentDiscount не должен быть внутри функции-конструктора, и также не нужно создавать отдельный
объект-прототип (как объект transport в уроке). */


let ProductEs5 = (function() {
    function MyConstructor(name, price) {
        this.name = name;
        this.price = price;
    }
    MyConstructor.prototype.whoami = function whoami() {
        console.log(`${this.name} - product name`);
    };
    MyConstructor.prototype.make25PercentDiscount = function make25PercentDiscount() {
        this.price = this.price - this.price * 0.25;
    };
    return MyConstructor;
})();

class ProductEs6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    whoami() {
        console.log(`${this.name} - product name`);
    }
    make25PercentDiscount() {
        this.price = this.price - this.price * 0.25;
    }
}


function task1_1() {
    var prod1 = new ProductEs5('chair', 5300);
    prod1.whoami();
    prod1.make25PercentDiscount();

    const prod2 = new ProductEs6("rrrrrrr", 5000)
    prod2.whoami();
    prod2.make25PercentDiscount();
}

task1_1()