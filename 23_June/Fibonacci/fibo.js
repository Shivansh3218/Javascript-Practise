let c= 0;
function fibo(first,second,count){
    if(count<=5){
        c = first + second;
        fibo(second,c,count+1);
        return c
    }
    console.log(c)
}
(fibo(1,1,1));