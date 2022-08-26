let n =4
let x = (n*2)-1
let z=x
y=n*3
for(let i=1;i<=n;i++){
    let star = ""
    for(let j =1;j<=x;j++){     
        if(j==i||j==x)
        star+="*"
        else star+= " "
    }
    for(let k=1;k<=n;k++){
      star+="4"
        }
    console.log(star)
    x--
}
// let y = n*3
