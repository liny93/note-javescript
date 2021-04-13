const set = new Set()

set.add('hello')
set.add('world')

console.log(set.size)

set.entries() // [Set Entries] { [ 'hello', 'hello' ], [ 'world', 'world' ] }
set.keys() // [Set Iterator] { 'hello', 'world' }
set.values() // [Set Iterator] { 'hello', 'world' }

set.has('hello')

for (let item of set) {

}

for (let item of set.keys()) {

}

for (let item of set.values()) {

}

for (let [key, value] of set.entries()) {

}


const array = Array.from(set)
const set2 = new Set(array)

// string大小写敏感
const set3 = new Set("Google") // { 'G', 'o', 'g', 'l', 'e' }