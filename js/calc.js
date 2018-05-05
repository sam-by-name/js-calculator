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
  let current = [];
  current = tempNum; // store all calc input to current
  let mathArr = current.split('');       // mathArr turns current into a split array
  let arrVar =[];
  for (let i = 0; i < mathArr.length; i++) {
    if (mathArr[i] == 1||2||3||4||5||6||7||8||9||0){
    arrVar += mathArr[i];

  }}
  alert(current);
  //document.getElementById("amount").value = answer;
}

////////////// CALCULATOR BUTTONS BELOW ////////////////////

function calcBtns (a) {
  tempNum = document.getElementById("amount").value += a;
}

function opBtns (a) {
  tempOp = document.getElementById('amount').value += a;
}

let tempNum;