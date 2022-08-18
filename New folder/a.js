
let obj = {
    name: "shivansh",
    class :"Dev"
}
let dev = JSON.parse(JSON.stringify(obj))
console.log(dev)



(function(){
    console.log(this)
 })()
let arr = ()=>{
console.log(this);
}
arr()