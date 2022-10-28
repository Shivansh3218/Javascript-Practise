var y = 1;
if (function f() {}) {
  y += typeof f;
//   console.log(typeof f)
}
console.log(y);

let z=()=>{}
console.log(z())
console.log(typeof z)

function abc(){}
console.log(typeof abc)
