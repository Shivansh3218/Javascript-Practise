let num= parseInt(process.argv[2])
let count = 0;
function mars(num,sum=0){
    let dig =0
    if(num>9){
      dig = num%10
        sum= dig+sum     
        mars(Math.floor(num/10),sum)
    }
    count =count +1
    console.log(count)

}
if(count==2)console.log("Number is a mars number")
else console.log("Number is not a mars number")
mars(12)