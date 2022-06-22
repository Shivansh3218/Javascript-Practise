//TO CALCULATE CHARGE TAKEN BY A LIBRARY FOR BOOKS TAKENFOR A NUMBER OF DAYS BY
// THE STUDENT


let days = parseInt(process.argv[2])
let charge = 0;
  if(days<=5){
    charge = 0
  } else if (days>=6&&days<=10){
    charge = (days-5)*3
  }
   else if (days>=11&&days<=15){
    charge = ((days-10)*4)+(5*3)
  
  }  else if (days>15 && days<365){
    charge =  ((days-15)*5)+ (5*3)+(5*4)
  }
console.log(`The total charge of library is ${charge} Rs`)