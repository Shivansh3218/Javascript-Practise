let arr = [
    { first_name: "Shivansh", Age: 22, Class: "B.Sc" },
    { first_name: "Pratibha", Age: 21, Class: "M.Sc Botany" },
    { first_name: "Subee", Age: 22, Class: "MA" },
    { first_name: "Sagar", Age: 23, Class: "M.Sc" },
]

let arr2 = arr.filter((x)=>x.Age==22).map((y)=>y.first_name) //USing curly braces were giving error
console.log(arr2)

// function firstname(element) {
//     //    return element.first_name
//     //    console.log(element.Age)

//     if (element.Age == 22) 
//     return element.Class

// }
// let reduced = arr.filter(function(a) {
//     return a.Age==22
// }).map(a)(a.first_name)
// console.log(reduced)