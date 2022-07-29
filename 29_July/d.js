// Binary Search Program
let arr = [1, 2,5,6]
let target = 5
let start = 0
let flag = false
let end = arr.length - 1
while (start <=end) {
    let mid = Math.floor((start + end)/ 2)
    if (target == arr[mid]) {
    //   console.log("found at ", mid)  
    flag = true
    //   return "found"
        start = start + 1
        end = mid - 1
    }
    else if(target>arr[mid]){
        start = mid+1
    }
else if(target <arr[mid]){
    end = mid-1
}
}

if(flag == true) console.log("found ")
else console.log("not found ")