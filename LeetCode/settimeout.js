function abc(i){
    setTimeout(()=>
    console.log(i))
}
for(var i=0 ;i<10;i++){
    abc(i)
}
