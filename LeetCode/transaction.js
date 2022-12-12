let arr= []
let transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
for(let i=0;i<transactions.length;i++){
    console.log(transactions[i].split(","))
    transactions[i]= transactions[i].split(",")
    for(let j=i+1;j<transactions.length;j++){
    transactions[j]= transactions[j].split(",")
        if(transactions[i][0]===transactions[j][0]||transactions[i][1]-transactions[j][1]||transactions[i] [2]!=transactions[j][2]){
            arr.push(transactions[j].join(","))
        }
}
}
    return arr