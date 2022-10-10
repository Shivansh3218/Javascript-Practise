let seats = [3,1,5]
let  students = [2,7,4]
let seatSum =0
let studentSum =0
for(let i=0;i<seats.length;i++){
   seatSum = seatSum+seats[i]
}
for(let i=0;i<students.length;i++){
   studentSum = studentSum+students[i]
}
let diff = studentSum-seatSum
if(diff<0){ console.log(diff*-1) }

else console.log(diff) 