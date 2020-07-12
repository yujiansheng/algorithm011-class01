### 学习笔记

#### 知识点

* 泛型递归、树的递归

  ```javascript
  function recursion(level,params){
    ///step 1:terminator
    if(level >MAX_LEVEL){
      process_result
      return 
    }
    
    // step 2:process logic
    process(level,data);
    
    // step 3:drill down
    recursion(level+1,newParams);
    
    // step 4:reverse
    
  }
  ```

  

* 分治

  ```
  function divide_conquer(problem,params){
    ///step 1:terminator
    if(null == problem){
      process_result
      return 
    }
    
    //step 2:prepare data
    data = prepare_data(problem)
    subproblems = split_problem(problem,data);
    
    //step 3:conquer subproblems
  	subresult1 = divide_conquer(subproblems[0],params_1);
  	subresult2 = divide_conquer(subproblems[1],params_2);
  	subresult3 = divide_conquer(subproblems[2],params_3);
  	...
  	
  	//step 4:final result
  	result = process_result(subresult1,subresult2,subresult3,...)
    
    // step 5:reverse
    
  }
  ```

* 回溯

  ```
  本质上是递归的思想，是在每一层尝试着解决问题，最终获得答案或者返回无解
  ```

  