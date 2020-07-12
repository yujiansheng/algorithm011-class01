/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
 func isValidBST(root *TreeNode) bool {
	var min int;
	return help(root,min);
}


func help(tmp *TreeNode,min int) bool{
	if nil == tmp {
			return true
	}
	if !help(tmp.Left,min){
			 return false
			 }
	if tmp.Val<=min{
			 return false
			 }
	min = tmp.Val

	return help(tmp.Right,min)
}