let n = parseInt(process.argv[2])
if (n == 0) {
    console.log("0")
} else {
    let str = ""
    let dig = 0
    while (n > 0) {
        dig = n % 10
        n = Math.floor(n / 10)
        if (dig % 2 == 0) {
            str = dig + str
        }
    }
    console.log(str == "" ? "-1" : str) 
}