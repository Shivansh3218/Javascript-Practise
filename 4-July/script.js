let div = document.querySelector(".div")
let btn = document.querySelector("#btn")

function clicked(){
    console.log("Javascript")
    // div.style.display ="block"
    // btn.innerHTML ="Save"
    
let element = document.createElement("div")
element.style.width ="400px"
element.style.height ="400px"
element.style.backgroundColor ="red"
// console.log(element)
document.body.append(element)

}
// if(btn.innerHTML== "Save"){
//     btn.innerHTML = "Submit"
// }