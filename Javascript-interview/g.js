// isNaN("hello");
console.log(isNaN("s"))
// console.log(Number.isNaN(0/0))

// for (let key in arr) {
//   console.log(key);
// }
// for (let value of arr) {
//   console.log(value);
// }

// let arr = ["a", ["d","e"], "c"];
// let newArr = [...arr]
// newArr[1][0]="f"
// console.log(arr,newArr)

// useEffect(()=>{

// },[])
// console.log(isNaN({}))


// let lists = ["noodles", { list: ["eggs", "flour", "water"] }];
// let deepcopy = JSON.parse(JSON.stringify(lists));
// deepcopy[1].list[0]="sda"
// console.log(deepcopy)

// let num = 15;
// function names(){
// return num = 10;
// }
// console.log(names())
// console.log(num)


let arr = [1,2,3,4,5,6,7]

let [a,b,...c] =arr
console.log(a,b,c)