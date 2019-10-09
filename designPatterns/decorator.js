function decorate (myObject) {
  // Decorating An Object - Below we want to create a new method that will decorate our object.
  myObject.addColor = function (color) {
    myObject.color = color
    console.log(myObject.color)
  }
  myObject.addSparkles = function (sparkleColor) {
    myObject.sparkles = sparkleColor
    console.log(myObject.sparkles)
  }
  myObject.addBananaSeat = function () {
    myObject.bananaSeat = true
    console.log(myObject.bananaSeat)
  }
  myObject.removeBananaSeat = function () {
    myObject.bananaSeat = false
    console.log(myObject.bananaSeat)
  }
  return myObject
}

var girlBike = {}
var boyBike = {}

decorate(girlBike)
decorate(boyBike)

girlBike.addColor('Pink & Purple & Blue')
console.log(girlBike.color)
girlBike.addSparkles('Silver')
console.log(girlBike.sparkles)
girlBike.addBananaSeat()
console.log(girlBike)