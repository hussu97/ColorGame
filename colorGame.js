// Declare private attributes
var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var clickedColor;
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
  //Add colors to squares
  squares[i].style.backgroundColor=colors[i];
  //Adding listeners to squares
  squares[i].addEventListener("click",function(){
    clickedColor=this.style.backgroundColor;
    if(clickedColor===pickedColor){
      messageDisplay.textContent="Good job!";
      changeColors(clickedColor);
    }else{
      this.style.backgroundColor="#232323";
      messageDisplay.textContent="Try Again!";
    }
  });
}

function changeColors(color){
  //loop through all the squares and change color to match given color
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=color;
  }
}

function pickColor(){
  return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColors(number){
  //Make array
  var arr=[];
  var colorString;
  //add random numbers to array
  for(var i=0;i<number;i++){
    colorString="rgb(";
    colorString+=Math.floor(Math.random()*256)+", ";
    colorString+=Math.floor(Math.random()*256)+", ";
    colorString+=Math.floor(Math.random()*256)+")";
    arr.push(colorString);
  }
  //return array
  return arr;

}
