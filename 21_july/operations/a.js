function operations(arr){
    let arr1 = []
     for(let i=0;i<arr.length;i++){
       if(arr[i]== "ADD_BEG") { arr1.unshift(arr[i-1])}
   
       if(arr[i]== "REM BEG")  {arr1.shift()}
   
       if(arr[i]== "ADD END")  {arr1.push(arr[i-1])}
   
       if(arr[i]== "REM END") { arr1.pop()}
     }
     return arr1
   
   }
   console.log(operations([[2, 'ADD_BEG', 3, 'ADD_BEG', 'REM_BEG', 4, 'ADD_END']]))