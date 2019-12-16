/**
 * use fast-json-stringify accelerate JSON serialization
 */

const fastJson = require('fast-json-stringify')

const obj = {
    name: 'levin',
    age: 26,
    city: 'shenzhen',
    skill: ['java', 'javascript']
}

console.time('json')
for (let i = 0; i < 1000000; i++) {
    JSON.stringify(obj)
}
console.timeEnd('json')

const stringify = fastJson({
    title: 'Example Schema',
    type: 'object',
    properties: {
        name: { type: 'string' },
        age: { type: 'integer' },
        city: { type: 'string' },
        skill: {
            type: 'array',
            items: {
                type: 'string',
                uniqueItems: true
            }
        }
    }
})

console.time('fastjson')
for (let i = 0; i < 1000000; i++) {
    stringify(obj)
}
console.timeEnd('fastjson')