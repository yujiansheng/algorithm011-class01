### 学习笔记

#### 知识点

* Hash

  ```
  哈希表(Hash table)，也叫散列表，是根据关键码值(Key value)而直接进行访问的数据结构。 它通过把关键码值映射到表中一个位置来访问记录，以加快查找的 速度。
  这个映射函数叫作散列函数(Hash Function)，存放记录的数组 叫作哈希表(或散列表)。
  ```

* 二叉树遍历

  ```javascript
  //Preorder(前序)：根->左->右
  function preorder(root){
    if(!root) return null;
    traverse_path.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }
  Inorder（中序）：左->根->右
  function inorder(root){
    if(!root) return null;
    inorder(root.left);
    traverse_path.push(root.val);
    inorder(root.right);
  }
  Postorder（后续）：左->右->根
  function postorder(root){
    if(!root) return null;
    postorder(root.left);
    postorder(root.right);
    traverse_path.push(root.val);
  }
  ```

* 二叉搜索树

  ```
  Binary Search Tree
  二叉搜索树，也称二叉搜索树、有序二叉树、 排序二叉树，是指一棵空树或者具有下列性质的 二叉树:
  1. 左子树上所有结点的值均小于它的根结点的值;
  2. 右子树上所有结点的值均大于它的根结点的值;
  3. 以此类推:左、右子树也分别为二叉查找树。
  ```

  