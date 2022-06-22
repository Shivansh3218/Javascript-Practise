function eligible(
    birth_day, birth_month, birth_year,
    election_day, election_month, 
    election_year
  ){
  let countyear =0;
  let countdate =0;
  let countmonth =0;
  for(let i= birth_year;i<election_year;i++){
  countyear++
  }
  for(let j=birth_day;j<=election_day;j++){
      countdate++
  }
  for(let a= birth_month;a<=election_month;a++){
      countmonth ++
  }
    if(countyear>70){
    
          return "I will watch naruto rather than voting"
    }
      
    else if(countyear>50 ){
   if(birth_day==election_day && election_month== birth_month){
        return  "I received an iphone"
   }else{
      return "I cannot walk so cannot vote please make an app to vote"
    }
    }
    else if(countyear =>20){
      if(birth_day==election_day && election_month== birth_month){
        return  "I received an iphone"
      }else{
        return "I can vote"
      }
    }
  // if(countyear==20){
  //   if(month>6){
  //     return "I can vote"
  //   }else if (month==6){
  //     if(day>11){
  //       return "I can vote"
  //     }else if(day==11){
  //       return "I recieved an iphone"
  //     }
  //   }
  }
      
   
    
  // return (`Your age is ${count} years ${countmonth} months and ${countdate} days  `)
  
  
  console.log(eligible(1,1,1900,1,1,2010))
  exports.eligible = eligible
  
    // birth_day, birth_month, birth_year,
    // election_day, election_month, 
    // election_year