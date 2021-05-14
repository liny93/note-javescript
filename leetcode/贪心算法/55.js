/**
 * 55. 跳跃游戏
 * 
 * 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 判断你是否能够到达最后一个下标。
 * 
 * 中等
 */

/**
* 我自己的做法
*/
var canJump = function (nums) {
    let len = nums.length - 1
    while (len > 0) {
        len = canJump2(len)
        if (len === false) return false
    }
    return true

    function canJump2(index) {
        for (let i = index - 1; i >= 0; i--) {
            if (nums[i] >= index - i) return i
        }
        return false
    }
};

/**
 * 贪心
 */

var canJump = function (nums) {
    let len = nums.length
    let maxLen = 0
    for (let i = 0; i < len; i++) {
        if (i <= maxLen) {
            maxLen = Math.max(maxLen, i + nums[i])
            if (maxLen >= len - 1) return true
        }
    }
    return false
};
