var y = 1;
if (function f() {}) {
  y += typeof f;
  console.log(typeof f)  // Undefined as  function f is not defined anywhere
}
console.log(y);

let z=()=>{}
console.log(z())
console.log(typeof z)  // will give function

function abc(){}
console.log(typeof abc) // will give function
