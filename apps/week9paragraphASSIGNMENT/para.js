var paragraph = "Etizzle a own yo' dizzle augue fo shizzle mah nizzle fo rizzle, mah home g-dizzle accumsizzle. Rizzle dope daahng dawg. Vivamizzle bizzle dolizzle, viverra vitae, for sure izzle, i'm in the shizzle izzle, crackalackin. Vestibulizzle ante ipsizzle crackalackin izzle faucibus orci luctus izzle i saw went crizzle posuere cubilia Sizzle; Sheezy dolizzle. Integer faucibizzle. Dizzle i'm in the shizzle blandit quizzle. Shizzlin dizzle rutrizzle orci. Sizzle facilisizzle. Tellivizzle bow wow wow nulla, venenatizzle eu, scelerisque cool, blandizzle the bizzle, things."

var eachWord = paragraph.split(" ");
var searchBox = "izzle"; 
var result = []; 

function searchPara( eachWord, searchBox){

for(var i = 0; i < eachWord.length; i++){
if(eachWord[i] === searchBox){
console.log(eachWord[i]);
console.log("hey i found it.... i added it to the results array");
result.push(eachWord[i]);
}

else{
console.log(result);
}
}

}

searchPara(eachWord, searchBox);
