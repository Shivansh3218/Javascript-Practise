function cooking(){
   promise = new Promise()   setTimeout(()=>{
          console.log("food is prepared")
      },2000)
   }

async function dinner(){
    console.log("enter in hotel")
    console.log("ordered food")
   await cooking()
    console.log("paying bill")
}

dinner()
