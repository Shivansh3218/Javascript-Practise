//TO PRINT INCRESING NUMBER OF STARS IN 2 DIMENSION



for(let i =1; i<=3; i++){
    let star = ' ' // This is for making the empty string
    for (j=1;j<=5;j++){ // This incresese number of stars in each line
     star = star + ' *' // every time this loop runs a column to right increses
     // like for first time 
     console.log(star)
    }
}