getname()
console.log(fname)
console.log(lname)

let lname = " Shivansh"
let fname = "Rawat"

function getname() {
    printname()
    console.log("calling")

    function printname() {
        console.log(place);
        let age = 10
        console.log(age)
        var place = "chennai"
    }
}