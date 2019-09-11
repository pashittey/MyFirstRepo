var myString = "this string var";
var mySecondstring = "not much";
var myNumber = myString.length + mySecondstring.length;
console.log(myString.substring(0,2))
console.log(mySecondstring.substring(0,2))
var myReverseString = myString.split("").reverse().join("");

console.log(myReverseString);

function isLarger(name1,name2){
  if(name1.length > name2.length){
    document.getElementById("demo1").innerHTML = name1 + " is larger than" + name2;
  }
  else{
    document.getElementById("demo1").innerHTML = name2 + "is larger than" + name1;
  }
}

isLarger(myString, mySecondstring);

document.getElementById("demo2").innerHTML = myReverseString;
document.getElementById("demo3").innerHTML = myNumber;
document.getElementById("demo4").innerHTML = myString.substring(0,2) +" "+ mySecondstring.substring(0,2);