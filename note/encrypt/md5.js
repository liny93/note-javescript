const crypto = require('crypto')

// 32位
function encrypt(str = '') {
    return crypto.createHash('md5').update(str.toString()).digest('hex')
}

function encrypt_hmac(str = '', key) {
    return crypto.createHmac('md5', key).update(str.toString()).digest('hex')
}

// 16位
function encrypt(str = '') {
    return crypto.createHash('md5').update(str.toString()).digest('hex').substring(8, 24)
}