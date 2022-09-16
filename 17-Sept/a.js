let arr =[]
 function sum(nums) {
    for(let i=0;i<2;i++){
        for(let j=0;j<nums.length;j++){
            arr.push(nums[j])
        }
    }
    return arr
};
sum([1,2,3,4,5,6])
console.log(arr)