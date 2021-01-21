const crypto = require('crypto')

function encrypt(str, key) {

}

function decrypt(str, key, iv) {
    const declearEncoding = 'utf8';
    const decipherEncoding = 'base64';
    const decipher = crypto.createDecipheriv('aes-256-ecb', key, iv);
    decipher.setAutoPadding(false)
    let result = decipher.update(str, decipherEncoding, declearEncoding);
    result += decipher.final(declearEncoding)
    return result
}

console.log(decrypt('U2FsdGVkX1/beRaSn47o8pgRMwGiBoE1XZqU3zl9UtBW2ALdgakaO62+Aq3fwEwZ', 'eeee', ''));