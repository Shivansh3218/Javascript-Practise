// Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"

let dictionary =["cat","bat","rat"]
let sentence ="the cattle was rattled by the battery"

let arr =[]
let sen =sentence.split(" ")
for(let i=0;i<dictionary.length;i++){
    for(let j=0;j<sen.length;j++){
        if(sen[j].startsWith(dictionary[i])){
            sen[j] = dictionary[i]
        }
    }
}
let abc= sen.join(" ")
console.log( abc)