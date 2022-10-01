let jewels = "z"
let stones ="ZZz"
let count =0
for(let i=0;i<stones.length;i++){
    for(let j=0;j<jewels.length;j++){
        console.log(stones[i],jewels[j])
        if(stones[i]==jewels[j]){
            count++
        }
    }
}
console.log(count)
return count