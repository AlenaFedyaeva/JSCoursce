"use strict";

/** 1.2
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true. */

let PostEs5 = (function() {
    function MyConstructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    MyConstructor.prototype.whoami = function whoami() {
        console.log(`${this.name} - author name`);
    };
    MyConstructor.prototype.edit = function edit(text) {
        this.text = text;
    };
    return MyConstructor;
})();

var AttachedPostEs5 = (function() {
    this.highlighted = false;

    function MyConstructor(author, text, date) {
        PostEs5.call(this, author, text, date);
    }

    // prototypal inheritance
    MyConstructor.prototype = Object.create(PostEs5.prototype);
    MyConstructor.prototype.constructor = PostEs5;

    MyConstructor.prototype.makeTextHighlighted() = function makeTextHighlighted() {
        this.highlighted = true;
    }
    return MyConstructor;
})();

class PostEs6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
    whoami() {
        console.log(`${this.name} - author name from Post`);
    }
}
class AttachedPostEs6 extends PostEs6 {
    constructor() {
        this.highlighted = false;
    }
    whoami() {
        super.whoami();
        console.log(`${this.name} - author name from AttachedPost `);
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

function task1_1() {
    var prod1 = new ProductEs6('chair', 5300);
    prod1.whoami();
    prod1.make25PercentDiscount();

    const prod2 = new ProductEs6("rrrrrrr", 5000)
    prod2.whoami();
    prod2.make25PercentDiscount();
}

function task1_2() {

    const post1 = new PostEs5('author1', "text1 Post", new Date());
    post1.whoami();
    var postAtt1 = new AttachedPostEs5('author1_2', "text1_2 Post", new Date());
    post2.whoami();


}

task1_2()