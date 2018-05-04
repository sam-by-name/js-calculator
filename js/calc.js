//document.addEventListener('DOMContentLoaded', start)

//function start () {
//  bindEventListeners(document.getElementsByClassName('calc'), [0].children)
//}

function reset() {
  document.getElementById("amount").value = ''; 
}
function delOne() {
  let current = document.getElementById("amount").value;  
  let newCurrent = current.slice(0, -1);
  document.getElementById("amount").value = newCurrent;
}

//////////////// Equals ///////////////////////////

function equals() {
  let current = document.getElementById("amount").value; // need to make work
  let number = current*1; 
  alert(number);
  let answer = Math.abs(number);
  document.getElementById("amount").value = answer;
}

/////////////// Math operators Below ///////////////

function divide() {
  document.getElementById("amount").value += '/';
}
function multiply() {
  document.getElementById("amount").value += '*';
}
function minus() {
  document.getElementById("amount").value += '-';
}
function plus() {
  document.getElementById("amount").value += '+';
}
function percent() {
  document.getElementById("amount").value += '%';
}
function decimal() {
  document.getElementById("amount").value += '.';
}


//////////////// NUMBERS BELOW ////////////////////

function one () {
  document.getElementById("amount").value += 1;
}
function two () {
  document.getElementById("amount").value += 2;
}
function three () {
  document.getElementById("amount").value += 3;
}
function four () {
  document.getElementById("amount").value += 4;
}
function five () {
  document.getElementById("amount").value += 5;
}
function six () {
  document.getElementById("amount").value += 6;
}
function seven () {
  document.getElementById("amount").value += 7;
}
function eight () {
  document.getElementById("amount").value += 8;
}
function nine () {
  document.getElementById("amount").value += 9;
}
function zero () {
  document.getElementById("amount").value += 0;
}

