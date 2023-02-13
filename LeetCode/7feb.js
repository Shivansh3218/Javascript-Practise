// var pivotIndex = function(nums) {
//     let mid = Math.floor(nums.length/2);
//     let leftSum = 0;
//     let rightSum =0;
//     for(let i = 0;i<mid;i++){
//         leftSum+=nums[i]
//     }
//     for(let i = nums.length-1;i>=mid;i--){
//         rightSum+=nums[i]
//     }
//   leftSum===rightSum? return 
// };
// console.log(pivotIndex([1,2,3,4]))


// let nums = [2,3,1,1,4]
// 	    for(let i=0;i<nums.length;i++){
//             console.log(nums[i], nums.length-1-i)
// 	        if(nums[i]===nums.length-i){
// 	             console.log(i)
// 	        }
// 	    }



    //     var jump = function(nums) {
    //         for(let i=1;i<=nums.length;i++){
    //             if(nums[i]===(nums.length-1-i)){
    //                return i+1
    //             }
    //         }
    //     };

    //    console.log(jump( [2,3,1,1,4]))

    let a=['a',123,123,123]
    for(let i in a){
        console.log(i,'a')
    }

    let b=[1,2,3,4]
    for(let i of b){
        console.log(i,'b')
    }