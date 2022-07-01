let num=5;
for(let i =1;i<=num;i++){
  let star = ""
  for(let j=1;j<=num-i;j++){
    star =star + " "
  }for(let k =1 ;k<=i*2-1;k++){
  star =star + "*"
}
console.log(star )
}
