function counter(para) {
    let count = 1;
    if (para == "increment") {
        return function () {
            count++;
            return (count)
        }
    }
    else if (para == "decrement") {
        return function () {
            count--;
            return (count)
        }
    }
}
let counter1 = counter("increment")
let counter2 = counter("decrement")
// console.log(counter1())
// console.log(counter1())
// console.log(counter1())
// console.log(counter2())
// console.log(counter2())
// console.log(counter2())
console.log(counter("increment")())
console.log(counter("decrement")())
console.log(counter("increment")())
