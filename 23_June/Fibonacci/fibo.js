function fibo(first,second,count){
    if(count<10){
        let c= first + second;
        return fibo(second,c,count+1);
    }
    console.log(first);
}
fibo(1,1,1);