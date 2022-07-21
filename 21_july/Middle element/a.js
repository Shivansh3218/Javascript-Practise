function addMiddle(arr, n){
    let mid = Math.ceil(arr.length/2)
      let a = []
      for(let i=1;i<=n;i++){
        a.push(i)
      }
      arr.splice(mid,0,...a)
      return arr
      
      }
    
   console.log(addMiddle([1, 2,3],5)) 