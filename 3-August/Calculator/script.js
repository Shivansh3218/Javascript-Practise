let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("btn"));

buttons.map((btn) => {
    btn.addEventListener("click", (event) => {
      let key = event.target.innerText;
    //   console.log(key)
    
    if(key =="A/C"){
        display.innerText = ""
    }
    else if(key == "="){
        // console.log(display.innerText)
        display.innerText = eval(display.innerText)
    }
    if(key== "="||key == "A/C"){
        display.innerText = display.innerText
    }else{

        display.innerText = display.innerText+key
    }

      })
})
