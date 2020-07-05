/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let ret = [];
  let traversal = (node) => {
    if (node) {
      let children = node.children;
      ret.push(node.val);
      let len = children.length;
      if (len) {
        for (let i = 0; i < len; i++) {
          traversal(children[i]);
        }
      }
    }
  }
  traversal(root);
  return ret;
};