/**
 * for await of (ES9) => test
 * 等待成员状态改变后遍历下一个成员
 * 
 * 
 */
async function test() {
    function gen(time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(time), time)
        })
    }

    let arr = [gen(1000), gen(2000), gen(3000)]

    for await (let item of arr) {
        console.log(Date.now(), item);
    }
}

test()