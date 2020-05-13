/**
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 */

var levelOrder = function (root) {
    if (!root) return []
    const res = []

    find(root, 0)

    function find(node, level) {
        if (!node) return
        if (!res[level]) res[level] = []
        res[level].push(node.val)

        find(node.left, level + 1)
        find(node.right, level + 1)
    }
    return res
};