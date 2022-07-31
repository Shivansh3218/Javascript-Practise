// Sorting of  array

var str = [213,45345,213,31,13,231,312]
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