function getFunc() {
    let value = "test";
    let func = function () { console.log(value); };
    return func;
}

getFunc()(); // "test", from the Lexical Environment of getFunc
let abc = new Function('a', 'b', 'return a+b')
console.log(abc(2, 3))

let bc = new Object({
    a: "eee",
    b: "cc",
    d: "dd",
})
console.log(bc)
let mul = new Function('a', 'return a.filter((acc)=>acc%2==0)') //must be passed in string
console.log(mul([1, 2, 3, 4, 5, 6, 7]))