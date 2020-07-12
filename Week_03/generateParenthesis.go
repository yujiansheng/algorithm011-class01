func generateParenthesis(n int) []string {
	ret :=[]string{}
	var generate func(left, right int,str string)
	generate=func(left ,right int,str string){
			if n == left && n == right {
					ret = append(ret,str)
					return 
			}
			if left < n{
					generate(left+1,right,str+"(")
			}
			if right < left{
					generate(left,right+1,str+")")
			}
	}
	generate(0,0,"")
	return ret
}