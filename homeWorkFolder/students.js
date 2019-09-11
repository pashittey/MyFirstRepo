var studentScores = [72, 94, 81, 98, 86];
var studentAvg = 0

for (var i = 0; i < studentScores.length; i++) {
    studentAvg += studentScores[i];
}

var result = studentAvg / studentScores.length

if (result > 90) {
    console.log("you got a scholorship")
} else {
    console.log("Trump Rocks")
} 