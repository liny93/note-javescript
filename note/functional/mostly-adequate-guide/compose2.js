const compose = function (f, g) {
    return function (x) {
        return f(g(x))
    }
}

const replace = function (str) {
    return str.replace(/\s+/ig, '_')
}

const toLowerCase = function (str) {
    return str.toLowerCase()
}

const add = function (str) {
    return str + '!'
}

const snakeCase = compose(replace, add)

console.log(snakeCase('HE WO'));
