// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

let image = [[1, 1, 0], [1, 0, 1], [0, 0, 0]];
let out = []
let output = []
for (let i = 0; i < image.length; i++) {
    for (let j = image[i].length - 1; j >= 0; j--) {
        if(image[i][j]==0){
            out.push(1)
        }else out.push(0)
    }
    output.push(out)
    out = []
}
console.log((output))