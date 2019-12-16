const compose = function (f, g) {
    return function (x) {
        return f(g(x))
    }
}

const toUpperCase = function (x) {
    return x.toUpperCase()
}

const exclaim = function (x) {
    return x + '!'
}

const shout = compose(toUpperCase, exclaim)

console.log(shout('hello world'));
