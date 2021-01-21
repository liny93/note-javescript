const crypto = require('crypto')

function encrypt_sha1(str) {
    return crypto.createHash('sha1').update(str).digest('hex')
}

function encrypt_sha256(str) {
    return crypto.createHash('sha256').update(str).digest('hex')
}

function encrypt_sha512(str) {
    return crypto.createHash('sha512').update(str).digest('hex')
}