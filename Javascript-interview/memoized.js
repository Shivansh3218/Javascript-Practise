const fun = (n) => {
    let sum = 0
    for (let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}

// console.time()
// console.log(fun())
// console.timeEnd()

const memoized = (fun) => {
    let cache = {}
    // console.log("heloooo")
     return function (...args) {
        // console.log("returning from anonymous function")
        let n = args[0]
        if (n in cache) {
            console.log("cache")
            return cache[n]
        }
        else {
            let result = fun(n)
            return result
        }
    }
}
console.time()
let efficient = memoized(fun)
console.log(efficient(5))
console.timeEnd()