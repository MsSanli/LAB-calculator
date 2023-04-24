

const button1 = document.getElementById("button-1");
button1.addEventListener("click", function() {
  const currentValue = document.getElementById("calculator-display").innerHTML;
  const newValue = currentValue + "1";
  document.getElementById("calculator-display").innerHTML = newValue;
});


console.log('Calculator');
