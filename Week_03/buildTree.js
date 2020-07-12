/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (0 == preorder.length || 0 == inorder.lenght) return null;
  let val = preorder[0];
  let mid = inorder.indexOf(val)
  return {
    val: val,
    left: buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid)),
    right: buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
  }
};