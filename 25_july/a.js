let sum = 15
let arr = [5,1,12,3,8,5]

function test(){
    for(let i =0; i <arr.length; i++){
        for(let j =i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==15){
                return `${arr[i]} ${arr[j]}`
            }
        }
    }
}
console.log(test())