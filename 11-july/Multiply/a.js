let a = [1,2,3,4,5,6,7,8,9,10,11,12] 
let b = [1,2,3,4,5,6,7,8,9,10,11,12]
let c =[]
for(let i = 0; i < a.length; i++) {
    c[i] = a[i]*b[i]
}
console.log(c)