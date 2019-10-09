function sevenEInkCalc () {
  var x = Number(document.getElementById('Quantity').value)
  var y = 399
  var d = 'Total Amount Due $'
  var multi = d + x * y
  document.getElementById('priceDisplay').innerHTML = multi
};
console.log(sevenEInkCalc())
