function nineEInkCalc () {
  var x = Number(document.getElementById('Quantity').value)
  var y = 599
  var d = 'Total Amount Due $'
  var multi = d + x * y
  document.getElementById('priceDisplay').innerHTML = multi
};
console.log(nineEInkCalc())
