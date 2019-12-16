/*
柯里化：
把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数


*/

function sub_curry(fn) {
    return function () {
        return fn()
    }
}

function curry(fn, length) {
    length = length || 4;
    return function () {
        if (length > 1) {
            return curry(sub_curry(fn), --length)
        }
        else {
            return fn()
        }
    }
}

var fn0 = function () {
    console.log(1)
}

var fn1 = curry(fn0)

fn1()()()() // 1