const log = require('single-line-log').stdout

for (let i = 1; i <= 100; i++) {
    log('已完成：' + i + '%')
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100)
}