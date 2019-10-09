function box(type,color,size){
  var myBox = {
  color: color,
  size: size,
  label: type,
  letterPrint: ["A", "B", "C", "D"] 
  };
  console.log("My box is " + myBox.color +" has a letterPrint "+ myBox.letterPrint[0] + " and it is " + myBox.size + " and has a label of " + myBox.label);
  }
  
  function instructions(){
  var myInstruct = {
  theType: "game",
  pages: 6,
  pictures: "yes"
  };
  console.log("My instructions are for a " + myInstruct.theType + " it has " + myInstruct.pages + " pages and does it have pictures " + myInstruct.pictures);
  
  }
  
  function run(){
  box("Family","yellow","8x4");
  instructions();
  }
  
  run();
  