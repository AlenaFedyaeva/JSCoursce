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

var PostEs5 = (function() {
    function MyConstructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    MyConstructor.prototype.whoami = function whoami() {
        console.log(`${this.name} - author name from Post`);
    };
    MyConstructor.prototype.edit = function edit(text) {
        this.text = text;
    };
    return MyConstructor;
})();

var AttachedPostEs5 = (function() {
    function MyConstructor(author, text, date, highlighted) {
        PostEs5.call(this, author, text, date);
        // Initialize subclass's own members
        this.highlighted = highlighted;
    }

    // prototypal inheritance
    MyConstructor.prototype = Object.create(PostEs5.prototype);
    MyConstructor.prototype.constructor = PostEs5;

    MyConstructor.prototype.whoami = function whoami() {
        MyConstructor.prototype.whoami.call(this);
        console.log(`${this.name} - author name from AttachedPost`);
    };

    MyConstructor.prototype.makeTextHighlighted = function makeTextHighlighted() {
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

function task1_2() {
    let timeInMs = Date.now();
    let post1 = new PostEs5('author1', 'text1 Post', timeInMs);
    post1.whoami();
    var postAtt1_2 = new AttachedPostEs5('author1_2', "text1_2 Post", timeInMs, false);
    postAtt1_2.whoami();

    const post2 = new PostEs6('author1', "text1 Post", timeInMs);
    post2.whoami();
    var postAtt2_2 = new AttachedPostEs6('author1_2', "text1_2 Post", timeInMs);
    postAtt2_2.whoami();
}

task1_2()