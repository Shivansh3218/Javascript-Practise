function readdata(display){
    setTimeout(()=>{
        console.log("reading data from data  ")
        let user  = {id :1, username:"Shivansh"}
        display(user)
    },2000)
}

function displayData(user){
    console.log("returning the user data",user);
    console.log("display content in github page");
}

function github(){
    console.log("entering user id as 1")
    console.log("Clicking submit")
    readdata(displayData)
}
github()