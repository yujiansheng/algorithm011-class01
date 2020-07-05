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
var preorderTraversal = function (root) {
  let ret = [];
  let traversal = (tmp) => {
    if (tmp) {
      let left = tmp.left;
      let right = tmp.right;

      ret.push(tmp.val);
      traversal(left);
      traversal(right);
    }
    return null;
  }
  traversal(root);
  return ret;
};