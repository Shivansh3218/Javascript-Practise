for (let i = 1; i < 3; i++) {
    for (let j = 0; j < 3; j++) { //printing 1,1 then i will keep printing 1 until j in
        //less than 3 hence giving output 1 0   1 1    1 2  
        for (let k = 1; k < 4; k++)// adding the third column in the list
        {
            console.log(i, j, k)// now we are creating 3 dimensional series
        }
    }
    // then for second loop of i then it'll print the i starting from 1
    // total loop is running 10 times getting output 
    // 1 1 1
    // i=1 j=1 k=2 
    // i=1 j= 2 k = 1
    // i=1 j = 2 k =2
    // like this first i=1 j =1 k =1
    //if i increse my k value by 1 the output will increse by 6 rows



}