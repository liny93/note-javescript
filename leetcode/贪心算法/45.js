/**
 * 45. 跳跃游戏 II
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 假设你总是可以到达数组的最后一个位置。
 *
 * 中等
 */

/**
 * 自己的做法,反向查找
 */
var jump = function (nums) {
    let count = 0
    let begin = nums.length - 1

    while (begin > 0) {
        begin = fastIndex(begin)
        count++
    }

    return count

    function fastIndex(index) {
        for (let i = 0; i < index; i++) {
            if (nums[i] + i >= index) return i
        }
    }
};



/**
 * 贪心，正向
 */
var jump = function (nums) {
    let length = nums.length;
    let end = 0;
    let maxPosition = 0;
    let steps = 0;
    for (let i = 0; i < length - 1; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i]);
        if (i == end) {
            end = maxPosition;
            steps++;
        }
    }
    return steps;
}