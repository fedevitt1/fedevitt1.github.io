let increment = 0;

let add = document.getElementById('inc');
let sub = document.getElementById('dec');
let num = document.getElementById('number');

add.addEventListener('click', function increase(){
  increment += 1;
  num.innerHTML = increment;
})
sub.addEventListener('click', function decrease(){
  increment -= 1;
  num.innerHTML = increment;
})
