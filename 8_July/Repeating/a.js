let num = [1,2,3,45,6,3,5,23,2]
for(let i =1;i<num.length;i++)
{
    if((num.includes(num[i],i+1)))
console.log(num[i])
break
}
