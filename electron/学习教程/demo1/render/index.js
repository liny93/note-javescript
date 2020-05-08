const fs = require('fs')
const path = require('path')

window.onload = () => {
    const btn = this.document.querySelector('#btn')
    const textarea = this.document.querySelector('#textarea')

    btn.onclick = () => {
        const content = fs.readFileSync(path.resolve(__dirname, './package.json'))
        textarea.innerHTML = content
    }
}