const log = require('single-line-log').stdout

for (let i = 1; i <= 100; i++) {
    log('已完成：' + i + '%')
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100)
}

const ProgressBar = require('progress');
const total = 100
let count = 0
const bar = new ProgressBar(`任务进度: [:bar] :count`, { total: total, width: 100, complete: '█' });

for (let i = 0; i < 100; i++) {
    bar.tick(1, { count: `${count++}/${total}` })
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100)
}
