function encrypt(str) {
    return Buffer.from(str, 'base64').toString()
}

function decrypt(str) {
    return Buffer.from(str).toString('base64')
}