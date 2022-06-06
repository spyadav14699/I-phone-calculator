"use strict";

// --> Function to push Signs and Oporators on the display
// --> if query clears the default zero as soon as you click a number
// --> turn AC button to C as soon something gets clicked
function pushSign(a) {
  const askForZero = document.getElementById("display_area").innerHTML;
  if (askForZero == 0) {
    document.getElementById("display_area").innerHTML = "";
  }

  document.getElementById("ac_switch").innerHTML = "C";
  document.getElementById("display_area").innerHTML += a;
}

// --> Function to read the display and calculate it on = button
function calcDisplay() {
  const displaySigns = document.getElementById("display_area");
  const result = eval(displaySigns.innerHTML);
  displaySigns.innerHTML = result;
}

// --> Function to clear the display with the C button
// --> if you click the C button it turns back to AC
function resetDisplay() {
  document.getElementById("display_area").innerHTML = "0";
  document.getElementById("ac_switch").innerHTML = "AC";
}
"use strict";

// --> Function to push Signs and Oporators on the display
// --> if query clears the default zero as soon as you click a number
// --> turn AC button to C as soon something gets clicked
function pushSign(a) {
  const askForZero = document.getElementById("display_area").innerHTML;
  if (askForZero == 0) {
    document.getElementById("display_area").innerHTML = "";
  }

  document.getElementById("ac_switch").innerHTML = "C";
  document.getElementById("display_area").innerHTML += a;
}

// --> Function to read the display and calculate it on = button
function calcDisplay() {
  const displaySigns = document.getElementById("display_area");
  const result = eval(displaySigns.innerHTML);
  displaySigns.innerHTML = result;
}

// --> Function to clear the display with the C button
// --> if you click the C button it turns back to AC
function resetDisplay() {
  document.getElementById("display_area").innerHTML = "0";
  document.getElementById("ac_switch").innerHTML = "AC";
}
