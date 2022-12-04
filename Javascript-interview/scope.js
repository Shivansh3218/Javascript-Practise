let fun =(i)=>{
    setTimeout(()=>{
        console.log(i)
       },1000)
}
for(var i=0;i<10;i++){ //Switching order will give Reference error that cannot access function before initialization
     
    fun(i)
  }