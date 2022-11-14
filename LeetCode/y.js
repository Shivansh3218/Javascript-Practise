let str = "Shivansh Rawat"
let arr = str.split(" ");
let arr2 = []
let a= ""
for(let i=0;i<arr.length;i++){
    for(let j= arr[i].length-1;j>=0;j--){
        a +=arr[i][j]
    }
    arr2.push(a)
    a=""
}
console.log(arr2)