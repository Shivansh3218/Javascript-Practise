let n = parseInt(process.argv[2])
let original = n, count = 0, sum = 0;
while(n!=0){
  n = Math.floor(n/10);
  count++;
}
n = original
while(n > 0) {
  let digit = n % 10;
  n = Math.floor(n/10);
  sum += digit ** count;
  
}
console.log(original === sum ? 'aircampus':'no') ;