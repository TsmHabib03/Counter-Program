const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const myCount = document.getElementById("myCount");

let count = 0;

increaseBtn.onclick = function() {
  count++;
  myCount.textContent = count;
}

decreaseBtn.onclick = function() {
  count--;
  myCount.textContent = count;
}

resetBtn.onclick = function() {
  count = 0;
  myCount.textContent = count;
}