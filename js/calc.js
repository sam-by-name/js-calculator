let tempNum;
let current;

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

function opBtns (a) {                                    // operator buttons function
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
  let pt1;
  let ans;  
  let z = tempNum.split(' ');
  let z1 = z[1];  
  let z2 = z[3];
  let z3 = z[5];
  let z4 = z[7];
  let z5 = z[9];

  let y = z.map(Number); 
  let a1 = y[0];
  let a2 = y[2];
  let a3 = y[4];
  let a4 = y[6];
  let a5 = y[8];
  let a6 = y[10];

  if        (z1 == '+') {ans = a1 + a2;} 
    else if (z1 == '*') {ans = a1 * a2;} 
    else if (z1 == '-') {ans = a1 - a2;} 
    else if (z1 == '/') {ans = a1 / a2;}
  if        (z2 == '+') {ans = ans + a3;} 
    else if (z2 == '*') {ans = ans * a3;} 
    else if (z2 == '-') {ans = ans - a3;} 
    else if (z2 == '/') {ans = ans / a3;}
  if        (z3 == '+') {ans = ans + a4;} 
    else if (z3 == '*') {ans = ans * a4;} 
    else if (z3 == '-') {ans = ans - a4;} 
    else if (z3 == '/') {ans = ans / a4;}
  if        (z4 == '+') {ans = ans + a5;} 
    else if (z4 == '*') {ans = ans * a5;} 
    else if (z4 == '-') {ans = ans - a5;} 
    else if (z4 == '/') {ans = ans / a5;}  
  if        (z5 == '+') {ans = ans + a6;} 
    else if (z5 == '*') {ans = ans * a6;} 
    else if (z5 == '-') {ans = ans - a6;} 
    else if (z5 == '/') {ans = ans / a6;}

  alert(ans);
}

