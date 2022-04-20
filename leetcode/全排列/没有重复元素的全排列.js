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

// 答案
var permute3 = function (nums) {
    let res = [], path = []
    const bt = (n, k, used) => {
        if (k == path.length) {
            res.push(Array.from(path))
            return
        }

        for (let i = 0; i < k; i++) {
            if (used[i]) continue
            used[i] = true
            path.push(n[i])
            bt(n, k, used)
            path.pop()
            used[i] = false
        }
    }
    bt(nums, nums.length, [])
    return res
};