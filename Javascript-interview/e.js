function fact(nums){
    if(nums==1) return 1
    return nums* fact(nums-1)
    
}
console.log(fact(5))