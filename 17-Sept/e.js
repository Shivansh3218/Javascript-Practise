let arr = [1,2,3,4,5,6]
let n=3
let arr2 = []

    for(let i=0;i<arr.length;i++){
        if(n<arr.length){
            arr2.push(arr[i])
            arr2.push(arr[n])
        }
        n=n+1
      }
      return arr2
console.log(arr2)