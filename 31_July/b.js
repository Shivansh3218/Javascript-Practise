// Sorting of  array

let str = [2,1,3,56]
for(let i=0;i<str.length;i++){
 for(let j=i+1;j<str.length;j++){
        if(str[i]>str[j]){
        let temp = str[i]
        str[i]= str[j]
        str[j]= temp
    }
}
}
console.log(str)