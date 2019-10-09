function twelveEInkCalc () {
  var x = Number(document.getElementById('Quantity').value)
  var y = 799
  var d = 'Total Amount Due $'
  var multi = d + x * y
  document.getElementById('priceDisplay').innerHTML = multi
};
console.log(twelveEInkCalc())
