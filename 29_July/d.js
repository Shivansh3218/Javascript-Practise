// Binary Search Program
let arr = [1, 4, 2, 1, 45, 3566, 523, 233]
let target = 45
let start = 0
let end = arr[arr.length - 1]
while (start <=end) {
    let mid = Math.ceil(start + end  / 2)
    if (target == arr[mid]) {
      console.log("found at ", mid)  
      return 
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
return console.log("Not found")

