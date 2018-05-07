let tempNum = '';
let tempOp = '';
let z = [];
let ans = 0;  
let y = [];
//let x = document.getElementById('amount').value; //doesn't work

////////////// CALCULATOR BUTTONS BELOW ////////////////////

function reset() {                                   // AC button function
  document.getElementById("amount").value = '';
  tempNum = '';
  tempOp = '';
  z = []; 
  ans = 0;
  y = [];
}

function delOne() {                                  // CE button function
  tempDisp = document.getElementById('amount').value;
  newDisp = tempDisp.slice(0, -1);
  document.getElementById('amount').value = newDisp;
 
}

//////////////////////////////////////

function numBtns (a) {                               // num buttons function
  tempNum += a; 
  document.getElementById('amount').value += (a);
}   

function minusBtn (a) {                              // operator buttons function
  if (tempNum == '') {                               // if tempNum is empty 
    ((tempNum = a) && (document.getElementById('amount').value += a));  // tempNum now holds '-'
  } else { opBtns ('-');
  }     
}

function opBtns (a) {                                // operator buttons function
  tempOp = a;
  z.push(tempNum);                                   // tempNum is pushed to sumArr
  z.push(tempOp);                                    // tempOp is pushed to sumArr
  tempNum = '';                                      // tempOp reset
  tempOp = '';                                       // tempNum reset
  document.getElementById('amount').value += a;
}

function decimalBtn (a) {                            // operator buttons function
  tempNum += '.';
  document.getElementById('amount').value += a;
}
function percentageBtn (a) {                         // operator buttons function
  tempNum += '%';
  document.getElementById('amount').value += a + ' ';
}

//////////////// Equals ///////////////////////////

function equals() {
  z.push(tempNum);                                   // make tempNum push to sumArr outside of here

  // operators below
  let z1 = z[1];  
  let z2 = z[3];
  let z3 = z[5];
  let z4 = z[7];
  let z5 = z[9];                                    // find a way to reset these z's and a's
                                                    
  y  = z.map(Number);
  // numbers below
  let a1 = y[0];
  let a2 = y[2];
  let a3 = y[4];
  let a4 = y[6];
  let a5 = y[8];
  let a6 = y[10];

  if        (z1 == '+') {ans = a1 + a2;} 
    else if (z1 == '*') {ans = a1 * a2;} 
    else if (z1 == '-') {ans = a1 - a2;} 
    else if (z1 == '÷') {ans = a1 / a2;}  
  if        (z2 == '+') {ans = ans + a3;} 
    else if (z2 == '*') {ans = ans * a3;} 
    else if (z2 == '-') {ans = ans - a3;} 
    else if (z2 == '÷') {ans = ans / a3;}
  if        (z3 == '+') {ans = ans + a4;} 
    else if (z3 == '*') {ans = ans * a4;} 
    else if (z3 == '-') {ans = ans - a4;} 
    else if (z3 == '÷') {ans = ans / a4;}
  if        (z4 == '+') {ans = ans + a5;} 
    else if (z4 == '*') {ans = ans * a5;} 
    else if (z4 == '-') {ans = ans - a5;} 
    else if (z4 == '÷') {ans = ans / a5;}  
  if        (z5 == '+') {ans = ans + a6;} 
    else if (z5 == '*') {ans = ans * a6;} 
    else if (z5 == '-') {ans = ans - a6;} 
    else if (z5 == '÷') {ans = ans / a6;}
document.getElementById("amount").value = ans;
}

/*
button press
function start
if its a number store in first index
if its not push to array
if minus and last index an operator, next number is a negative number
else push minus to next index */



