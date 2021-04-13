const map = new Map()

console.log(map.size)

map.set('hello', 'world') // {'hello':'world'}

map.get('hello') // 'world'

map.has('hello') //  true

map.keys() // ['hello']
map.values() // ['world']
map.entries() // [['hello','world']]

map.delete('hello')

map.clear()

for (const val of map) { // [['hello','world']]
    console.log(val)
}

for (const [key, value] of map) {
    console.log(key + " = " + value)
}

map.forEach(val => console.log(val))

// map and array

const array = [
    ["key1", "value1"],
    ["key2", "value2"]
]

const map2 = new Map(array)

const array2 = Array.from(map2)
const array3 = [...map2]

// Don't do this

const map3 = new Map()
map3['hello'] = 'world'

map3.get('hello') // undefined
map3.has('hello') // false