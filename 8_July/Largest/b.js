let num = [1,2,3,45,6,3,5,23,2]
let max =0
for(let i=0;i<num.length;i++){
    if(max<num[i]){
        max=num[i]
    }
}console.log(max)