"use strict";
//@ts-check

/** 1.(это задание делайте по желанию) Написать функцию, преобразующую число в объект. Передавая на
вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
Вам может пригодиться:
Number.isInteger(value) – функция проверяет, является ли переданное число целым, подробнее здесь
https://mzl.la/2XCVSsx
Math.floor(value) - метод возвращает целое число, которое меньше или равно данному числу (проще
говоря округляет в меньшую сторону), подробнее здесь https://mzl.la/2Qx42SO .
Используйте также остаток от деления на 10, например 123 % 10 будет 3
Вам также может пригодится делить число на 100 и на 10.  */


function makeObjectFromNum(num) {
    if (!Number.isInteger(num)) {
        console.log("ERR: num does not fit!")
        return {}; //литерал пустого объекта
    }

    if (num < 0 || num > 999) {
        console.log("ERR: num out of range [0, 999] !")
        return {}; //литерал пустого объекта
    }


    let hundreds = Math.floor(num / 100);
    let tens = Math.floor((num - (hundreds * 100)) / 10);
    let units = num - (hundreds * 100 + tens * 10);

    let obj = { // объект
        units, //это единицы
        tens, //это десятки
        hundreds, //это сотни
    };

    return obj;
}


function task1() {

    let obj1 = makeObjectFromNum(45.89);
    let obj2 = makeObjectFromNum(5);
    let obj3 = makeObjectFromNum(457);
    let obj4 = makeObjectFromNum('45');
    let obj5 = makeObjectFromNum(45);

    console.log(obj1, obj2, obj3, obj4, obj5)

}

task1();