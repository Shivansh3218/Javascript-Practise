let num = [1,2,3,4,5]

function get(num){
    return num.map(function new_get(ele){
        if(ele>0){
            return ele*new_get(ele-1)
        }else{
            return 1;
        }
    });       
}
console.log(get(num))