let str = "malayalam"
let newStr =""
for(let i=str.length-1; i>=0; i--){
     newStr = newStr + str[i]
}
console.log(newStr)
console.log(str)
if(str===newStr) console.log("string is palindrome")
else console.log("string is not palindrome")
