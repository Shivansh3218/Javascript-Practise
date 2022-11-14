let arr = [1,2,3,4,5,6,7]
let num =3
let count=0
let arr2 =[]
let a =[]

for(let i =0;i<arr.length;i++){
    if(count<num){
    a.push(arr[i])
    count++
    }
    if(count==num){
        arr2.push(a)
        count=0
        a=[]
    }
}
if(arr.length%num!==0){
    arr2.push([arr[arr.length-1]])
}

console.log(arr2)