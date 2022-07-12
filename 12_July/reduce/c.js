let arr =[
    {first_name :"Shivansh" , Age :22 , Class : "B.Sc"},
    {first_name :"Pratibha" , Age :21 , Class : "M.Sc Botany"},
    {first_name :"Subee" , Age :22 , Class : "MA"},
    {first_name :"Sagar" , Age :23 , Class : "M.Sc"},
]

function firstname(element){
   return element.first_name
}

let arr2= arr.map(firstname)
console.log(arr2)