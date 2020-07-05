/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function (root) {
  let ret = [];
  let fun = (root) => {
    if (!root) return root;
    root.left && fun(root.left);
    ret.push(root.val);
    root.right && fun(root.right);
  }
  root && fun(root);
  return ret;
};