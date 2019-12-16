// 基于 note1 的函数式写法   （4 + 0） * 2 + 4 * 2

const add = function (flock_x, flock_y) {
    return flock_x + flock_y;
}

const multiply = function (flock_x, flock_y) {
    return flock_x * flock_y;
}

const flock_a = 4;
const flock_b = 2;
const flock_c = 0;


const result = add(multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b));
console.log(result);   // => 16
