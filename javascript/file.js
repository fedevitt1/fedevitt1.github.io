var increment = 0;

var add = document.getElementById('inc');
var sub = document.getElementById('dec');
var num = document.getElementById('number');

add.addEventListener('click', function increase(){
  increment += 1;
  num.innerHTML = increment;
})
sub.addEventListener('click', function decrease(){
  increment -= 1;
  num.innerHTML = increment;
})
