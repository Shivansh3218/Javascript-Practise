let arr = [[3,4],[5,6]]
let hypo=0
for(var i = 0; i < arr.length; i++){
    // console.log(arr[i])
    // console.log(arr[i+1])

 hypo = Math.sqrt((arr[i]**2)+ ((arr[i+1])**2))
}
console.log(hypo)