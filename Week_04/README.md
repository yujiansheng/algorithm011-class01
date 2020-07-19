# 学习笔记

#### 知识点

* DFS深度优先搜索、BFS广度优先搜索

  深度遍历会依次遍历子树的所有节点

  广度遍历会依次遍历每一层的节点

  ```javascript
  function dfs(index){
    if node in visited{
      // allready visited
      return;
    }
    visited.push(node);
    
    // process current node
    // TODO ...
    // logic here
    dfs(node.left);
    dfs(node.right);
  }
  ```

  ```javascript
  function bfs(node,visited){
    if node in visited{
      // terminator
      //already visited
      return;
    }
    
    visited.push(node);
    
    // process current node here
    // TODO ...
    
    for (next_node in node.chiledren){
      if(next_node in visited){
        	dfs(next_node,visited);
      }
    }
  }
  ```

* 贪心算法

  贪心是每一步都选择当前最好或者最优的结果，最终希望结果是全局最优的结果

  （ps.贪心算法只是选择当前的最优结果且不会保存最优回退比较其他情况最优）

  > 适用场景：能分成子问题解决，子问题的最有结果能递推出最终最优结果，及适合具有最优子结构的问题

* 二分查找

  1. 具有单调性，及函数的递增或者递减规则
  2. 存在上下分界
  3. 能够通过索引访问

  ```javascript
  function binary_search(arr,target){
    let left=0,right=arr.lenght-1;
    while(left < right){
      let mid = (left + right) /2;
      if(arr[mid] == target){
        // find the target
        return resylt// or break; 
      }else if(arr[mid] < target){
        left = mid + 1;
      }else{
        right = mid - 1;
      }
    }
  }
  ```

  