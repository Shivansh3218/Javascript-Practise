function prepare(startEating){
    setTimeout(()=>{
        console.log("food is prepared")
        console.log("deliver to the table")
        startEating();
    },1000)
}

function eatrotis(){
    setTimeout(()=>{
        console.log("eating rotis")
        console.log("pay the bill")
    },5000)
}
function hotelvisit(){
    console.log("Entering into hotel")
    console.log("Ordered Chicken and rotis")
    console.log("food is getting prepared")
    prepare(eatrotis)
}

hotelvisit();