var x = [2, 3, 4, 9]
x.push(12, 7)
x.sort((a, b) => a - b)
console.log(x.sort(function (a, b) { return a - b }))
