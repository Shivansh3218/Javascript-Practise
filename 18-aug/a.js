let count =1
function time(){
if(count<=5)
for(let i=0;i<5;i++){
    setTimeout(function fun() {
        console.log(i)
    },i*1000)
}
}
time()