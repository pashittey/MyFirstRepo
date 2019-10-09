function f150() {
  // Decorating An Object - Below we want to create a new method that will decorate our object.
  f150.addColor = function (color) {
    f150.color = color
    console.log(f150.color)
  }
  f150.addSparkles = function (sparkleColor) {
    f150.sparkles = sparkleColor
    console.log(f150.sparkles)
  }
  f150.addF150Seat = function () {
    f150.F150Seat = true
    console.log(f150.F150Seat)
  }
  f150.removeF150Seat = function () {
    f150.F150Seat = false
    console.log(f150.F150Seat)
  }
  return f150
}


f150()


f150.addColor('Pink & Purple & Blue')
console.log(f150.color)
f150.addSparkles('Silver')
console.log(f150.sparkles)
f150.addF150Seat()
console.log(f150)