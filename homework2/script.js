"use strict";
//1. Объясните почему код даёт именно такие результаты?
function task1() {
    //пример 1---------------------------------------------------------
    let a = 1,
        b = 1,
        c, d;
    c = ++a;
    /**
     * 1) ++а - инкрементирует а на 1, а=2. 
     * Операция ++а - преинкремент, выполняется до присваивания
     * 2) присваиваем с=2
     */
    alert(c); // ответ: 2

    //пример 2----------------------------------------------------------
    d = b++;
    /**
     * 1) сначала приваивается /d=1/
     * 2) b++ - постинкремент, выполняется после присваивания /b=2/
     */

    alert(d); //ответ: 1

    //пример 3----------------------------------------------------------
    c = 2 + ++a;
    alert(c); //ответ: 5
    /**
     * 1) сначала вычисляется преинкремент /а=2+1=3/
     * 2) с=2+3=5
     */


    //пример 4-----------------------------------------------------------
    d = 2 + b++;
    alert(d); //ответ: 4
    alert(a); //3
    alert(b); //3

    /**
     * 1) d = 2+ 2 =4 (b=2 из 2 примера)
     * 2) b++ : /b=2+1=3/ постинкремент выполняется после вычисления d
     * 3) d=4 - вычислили в пункте 4.1
     * 4) а=3 - вычислили в пункте 3.1
     * 5) b=3 - вычислили в пункте 4.2
     */
}

//Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
function task2() {
    let a = 2;
    let x = 1 + (a *= 2);
    console.log(x, a);

    /**
     * 1) a *= 2 - (сокращенная запись умножения на себя) 
     *   означает a=a*2=2*2=4
     * 2)x=1+4=5
     * 3) x=5 a=4
     */
}
/**
 * 3. Объявить две переменные a и b и задать им целочисленные произвольные начальные
значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
 */

//
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function task3() {
    let mint = -20000;
    let maxt = 20000;

    let a = getRandomInt(mint, maxt);
    let b = getRandomInt(mint, maxt);

    let rez = 0;
    if (a >= 0 && b >= 0) {
        rez = a - b;
    } else if (a < 0 && b < 0) {
        rez = a * b;
    } else if ((a < 0 && b >= 0) || (a >= 0 && b < 0)) {
        rez = a + b;
    }
    return rez
}
//-----------------------------------------------------------------------------------------------------------------
// task4 
/**Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return. */

function sum(a, b) {
    return ((a) + (b))
}

function minus(a, b) {
    return ((a) - (b))
}

function multpl(a, b) {
    return ((a) * (b))
}

function division(a, b) {
    return ((a) / (b))
}

//-------------------------------------------------------------------------------------------------------------------
//task5
/**Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение. */

function mathOperation(arg1, arg2, operation) {

    var operationName = function() {
        // Initializes the enumerations
        var enumList = [
            "sum",
            "minus",
            "mult",
            "div"
        ];
        enumObj = {};
        enumList.forEach((item, index) => enumObj[item] = index + 1);

        // Do not allow the object to be changed
        Object.freeze(enumObj);
        return enumObj;
    }();
    let rez;
    switch (operation) {
        case enumList.sum:
            rez = sum(arg1, arg2);
            break;
        case enumList.minus:
            rez = minus(arg1, arg2);
            break;
        case enumList.multpl:
            rez = multpl(arg1, arg2);
            break;
        case enumList.div:
            rez = division(arg1, arg2);
            break;
        default:
            break;
    }
    return rez;
}


function task5() {
    console.log(mathOperation(5, 5, "sum"))
    console.log(mathOperation(5, 5, "minus"))
    console.log(mathOperation(5, 5, "mult"))
    console.log(mathOperation(5, 5, "div"))
}
// task1();
// task2();
// task3();
task5();