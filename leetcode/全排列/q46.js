/**
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 */

// 广度优先遍历
function permute(nums) {
    const res = []
    for (let i = 0; i < nums.length; i++) {
        add([...nums], i, [])
    }

    function add(newNums, index, resNums) {

        resNums.push(newNums[index])
        newNums.splice(index, 1)
        if (newNums.length === 0) {
            res.push(resNums)
            return
        }
        for (let i = 0; i < newNums.length; i++) {
            add([...newNums], i, [...resNums])
        }
    }
    return res
}

//深度优先遍历
function permute2(nums) {

}
