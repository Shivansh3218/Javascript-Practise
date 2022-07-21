function descending_order(arr){

    let newArr = arr.sort(function (a,b)
        {return b-a})
      return newArr
    }
    descending_order([1,2,3,4,5,6,7,8,9])