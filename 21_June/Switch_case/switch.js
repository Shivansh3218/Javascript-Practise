// USE OF SWITCH CASE TO LOG THE DAY BY GIVING AN INTEGER VALUE



let s = parseInt(process.argv[2])
switch (s){
    case 1:
    console.log("SUNDAY")
        break

        case 2:
    console.log("MONDAY")
            break
 
    case 3:
    console.log("TUESDAY")
   break
    case 4:
    console.log("Wednesdat")
    break
    case 5:
    console.log("ThursDAY")
    break
    case 6:
    console.log("FRIDAY")
    break
    case 7:
    console.log("SATURDAY")
    break

    default:
        console.log("WRONG INPUT")
        }