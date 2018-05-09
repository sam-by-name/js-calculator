let tempNum = '';                                    //  holds temp number
let z = [];                                          //  holds string/numbers/ math operators in order
let ans = 0;                                         //  Holds answer
let y = [];                                          //  Holds numbers once they have been converted from strings

////////////// CALCULATOR BUTTONS BELOW ////////////////////

function reset() {                                   // AC button function
  document.getElementById("amount").value = '';
  tempNum = '';
  z = []; 
  ans = 0;
  y = [];
}

function delOne() {                                  // CE button function
  let tempDisp = document.getElementById('amount').value;
  let newDisp = tempDisp.slice(0, -1);
  if (tempNum !== '') {
    tempNum = tempNum.slice(0, -1);
  } else { z = z.slice(0, -1)};                      // currently removes whole last index instead of just last digit of most recent
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
  if (tempNum !== '') {
  z.push(tempNum)
  }                                                  // tempNum is pushed to z
  z.push(a);                                         // tempOp is pushed to z
  tempNum = '';                                      // tempOp reset
  document.getElementById('amount').value += a;
}

function decimalBtn (a) {                            // operator buttons function
  tempNum += '.';
  document.getElementById('amount').value += a;
}
function percentageBtn (a) {                         // operator buttons function
  tempNum = tempNum / 100;
  document.getElementById('amount').value += a;
}


//////////////// Equals ///////////////////////////

function equals() {
  z.push(tempNum);                                                                  
  y = z;
  y = y.map(Number);

  if        (z[1] == '+') {ans = y[0] + y[2];} 
    else if (z[1] == '×') {ans = y[0] * y[2];} 
    else if (z[1] == '-') {ans = y[0] - y[2];} 
    else if (z[1] == '÷') {ans = y[0] / y[2];}
  if        (z[3] == '+') {ans = ans  + y[4];} 
    else if (z[3] == '×') {ans = ans  * y[4];} 
    else if (z[3] == '-') {ans = ans  - y[4];} 
    else if (z[3] == '÷') {ans = ans  / y[4];}
  if        (z[5] == '+') {ans = ans  + y[6];} 
    else if (z[5] == '×') {ans = ans  * y[6];} 
    else if (z[5] == '-') {ans = ans  - y[6];} 
    else if (z[5] == '÷') {ans = ans  / y[6];}
  if        (z[7] == '+') {ans = ans  + y[8];} 
    else if (z[7] == '×') {ans = ans  * y[8];} 
    else if (z[7] == '-') {ans = ans  - y[8];} 
    else if (z[7] == '÷') {ans = ans  / y[8];}  
  if        (z[9] == '+') {ans = ans  + y[10];} 
    else if (z[9] == '×') {ans = ans  * y[10];} 
    else if (z[9] == '-') {ans = ans  - y[10];} 
    else if (z[9] == '÷') {ans = ans  / y[10];}
 
document.getElementById("amount").value = ans;
z = [];
tempNum = ans;
}

/*
declare 3 variables
initiate onclick button function.
if it's not a number or equal to '.'
add it to temp,
else if ac, wipe the slate clean.
else if it ce, clean temp and then update answer with current val,
if it is X, push temp and times symbol to entries variable,
if it's a divide, push temp and divide symbol to entries variable,
if it's an equals, push temp to entries,

declare nt and asign it Number(entries(0));
loop  through entries by its length,
declare nextNum, is equals to Number(entries(loop + 1)),
declare symbol, is equals to entries loop number,
if symbol is a plus, nt plus and equals nextNum,
if symbol is a minus, nt plus and equals nextNum,
if symbol is a times, nt plus and equals nextNum,
if symbol is a divide, nt plus and equals nextNum,
loop iterate,

if the number is negative cast expelliarmus on it,
once answer is given, clear entries and temp,
else, push temp and val to entries and clear temp.
*/