function bracket_match(bracket_string) {
    let count = 0
    let count1 =0
    for(let i=0;i/<bracket_string.length;i++){
      if(bracket_string[i]== "(") count+= 1
      else if(bracket_string== ")")count1+= 1
    }
    if(count==count1) return 0
    else if(count<count1) return count1- count
    else return count-count1
  }
  console.log(bracket_match("(())"))