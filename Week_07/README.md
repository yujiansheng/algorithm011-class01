学习笔记

#### 知识点

##### Trie 树

* 基本结构
字典树，又称单词 查找树或键树，是一种树形结 构。典型应用是用于统计和排 序大量的字符串(但不仅限于 字符串)，所以经常被搜索引 擎系统用于文本词频统计。
它的优点是:最大限度地减少 无谓的字符串比较，查询效率 比哈希表高

* 基本性质
结点本身不存完整单词;
从根结点到某一结点，路径上经过的字符连接起来，为该结点对应的 字符串;
每个结点的所有子结点路径代表的字符都不相同。
*  核心思想
Trie 树的核心思想是空间换时间。 利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的。

```python
# Python Trie树 代码模版
class Trie(object):
  
	def __init__(self): 
		self.root = {} 
		self.end_of_word = "#" 
 
	def insert(self, word): 
		node = self.root 
		for char in word: 
			node = node.setdefault(char, {}) 
		node[self.end_of_word] = self.end_of_word 
 
	def search(self, word): 
		node = self.root 
		for char in word: 
			if char not in node: 
				return False 
			node = node[char] 
		return self.end_of_word in node 
 
	def startsWith(self, prefix): 
		node = self.root 
		for char in prefix: 
			if char not in node: 
				return False 
			node = node[char] 
		return True
```
#####  并查集
*  适用场景
组团、配对问题（Leetcode类似：朋友圈问题）
* 基本操作
 1. makeSet(s):建立一个新的并查集，其中包含 s 个单元素集合。
 2. unionSet(x, y):把元素 x 和元素 y 所在的集合合并，要求 x 和 y 所在的集合不相交，如果相交则不合并。
 3. find(x):找到元素 x 所在的集合的代表，该操作也可以用于判断两个元 素是否位于同一个集合，只要将它们各自的代表比较一下就可以了。
```javascript
// JavaScript 并查集代码模版
class unionFind {
  constructor(n) {
    this.count = n;
    this.parent = new Array(n);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(p) {
    let root = p;
    while (parent[root] !== root) {
      root = parent[root];
    }
    // 压缩路径
    while (parent[p] !== p) {
      let x = p;
      p = this.parent[p];
      this.parent[x] = root;
    }
    return root;
  }

  union(p, q) {
    let rootP = find(p);
    let rootQ = find(q);
    if (rootP === rootQ) return;
    this.parent[rootP] = rootQ;
    this.count--;
  }
}
```


#####  AVL 树
* 特性
1. Balance Factor(平衡因子): 是它的左子树的高度减去它的右子树的高度(有时相反)。 balancefactor={-1, 0, 1}
2. 通过旋转操作来进行平衡(四种【左旋、右旋、左右旋、右左旋】)
> 注：带子树的节点进行旋转的时候需要注意子树的位置
* 不足
结点需要存储额外信息、且调整次数频繁（主要是在插入时左右旋转）
* 适用
读取操作多，插入、删除操作较少
#####  Red-black Tree
红黑树是一种近似平衡的二叉搜索树(Binary Search Tree)，它能够确保任何一 个结点的左右子树的高度差小于两倍。具体来说，红黑树是满足如下条件的二叉 搜索树:
1. 每个结点要么是红色，要么是黑色
2. 根结点是黑色
3. 每个叶结点(NIL结点，空结点)是黑色的。
4. 不能有相邻接的两个红色结点
5. 从任一结点到其每个叶子的所有路径都包含相同数目的黑色结点。
* 关键性质
从根到叶子的最长的可能路径不多于最短的可能路径的两倍长
* 适用
插入、删除操作多的数据结构（类如map，hash等都是用红黑树实现）