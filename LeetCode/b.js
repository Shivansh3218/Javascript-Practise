//Return the total number of max  words in a sentence
// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation: 
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.
let sentences = ["alice and bob love leetcode","i think so too","this is great thanks very much"]
let max =0
let newmax=0 
for(let i=0;i<sentences.length;i++){
    let count =1
    for(let j=0;j<sentences[i].length;j++){
   if(sentences[i][j]==" ")
   count++
   newmax = count
    }
    if(max<=newmax){
        max=newmax
    }
}
console.log(max)
return max