test1()
/**
 * for await of (ES9) => test1
 * 等待成员状态改变后遍历下一个成员
 * 
 * 
 */
async function test1() {
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
