let tempNum;
let current;
//let tempTot;


////////////// CALCULATOR BUTTONS BELOW ////////////////////

function reset() {                                         // AC button function
  document.getElementById("amount").value = '';
  tempNum = ''; 
}

function delOne() {                                        // CE button function
  tempNum = tempNum.slice(0, -1);
  document.getElementById("amount").value = tempNum;
}

function calcBtns (a) {                                    // num buttons function
  tempNum = document.getElementById("amount").value += (a);
}

function plusBtn (a) {                                    // operator buttons function
  tempNum = document.getElementById('amount').value += ' ' + a + ' ';
}
function minusBtn (a) {                                    // operator buttons function
  tempNum = document.getElementById('amount').value += ' ' + a + ' ';
}
function timesBtn (a) {                                    // operator buttons function
  tempNum = document.getElementById('amount').value += ' ' + a + ' ';
}
function divideBtn (a) {                                    // operator buttons function
  tempNum = document.getElementById('amount').value += ' ' + a + ' ';
}
function decimalBtn (a) {                                    // operator buttons function
  tempNum = document.getElementById('amount').value += a;
}
function percentageBtn (a) {                                    // operator buttons function
  tempNum = document.getElementById('amount').value += a + ' ';
}

//////////////// Equals ///////////////////////////

function equals() { 
  let mathArr = tempNum.split(' ');
  let joined = mathArr.join(' ');       // mathArr turns current into a split array
  let pt1 = mathArr[0]+=mathArr[1]+=mathArr[2];
  let pt2 = mathArr[3]+=mathArr[4];
  

//  for (let i = 0; i < mathArr.length; i++) {
//   // if (mathArr[i] ==  ){
//    arrVar += mathArr[i];
//
//  }

  alert(joined);



  //document.getElementById("amount").value = answer;
}

