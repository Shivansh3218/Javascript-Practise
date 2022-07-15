let arr = [
    [1, 2, 3, 8],
    [4, 5, 6, 1],
    [7, 8, 9, 1],
    [10, 11, 12, 1]
];
let start = [];
var count= 0;
var rs = 0;
var re = arr.length; // 4
var cs = 0;
var ce = arr.length; //4
// 1,2,3,1,1,1,1,12,11,10,7,4,5,6,9,8
while(count < 16){
    for(var i=cs; i<ce; i++){
        // console.log(arr[0][i]);
        start.push(arr[rs][i])
    }
    count++;
    rs++;
for(var i= rs; i < re; i++){
    // console.log(arr[i][arr.length-1]);
    start.push(arr[i][ce-1])
    }
    count++;
    ce--; //3
for(var i=ce-1; i >= cs; i--){
    // console.log(arr[i][arr.length-1]);
    start.push(arr[re-1][i])
}
count++;
re--; //3
for(var i = re-1; i >= rs; i--){
    // console.log(arr[i][arr.length-1]);
    start.push(arr[i][cs])
}
count++;
cs++;
}
console.log(start.join(" "))