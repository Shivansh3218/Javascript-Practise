let arr = [1,2,3,4,5,6,7]
// const mapped =  arr.map((item)=>item*3)
// console.log(mapped)
Array.prototype.myMap = ((cb)=>{
    let temp = []
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))

    }
    return this
})