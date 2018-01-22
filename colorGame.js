// Declare private attributes
var numberOfSquares=6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay =document.getElementById("colorDisplay");
var clickedColor;
var messageDisplay = document.querySelector("#message");
var playAgainButton=document.querySelector("#reset");
var heading=document.querySelector("h1");
var easyButton=document.getElementById("easy");
var hardButton=document.getElementById("hard");

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
      playAgainButton.textContent="Play Again?";
    }else{
      this.style.backgroundColor="#232323";
      messageDisplay.textContent="Try Again!";
    }
  });
}

playAgainButton.addEventListener("click",function(){
  //change button text
  this.textContent="New Colors";
  //generate new color
  colors=generateRandomColors(numberOfSquares);
  //pick a new color from the array for colorPicked
  colorDisplay.textContent=pickedColor=pickColor();
  //change colors of squares
  for(var i=0;i<colors.length;i++){
    squares[i].style.backgroundColor=colors[i];
  }
  //Reset button of h1
  heading.style.backgroundColor="steelblue";
})

easyButton.addEventListener("click",function(){
  //Changing the selected mode
  heading.style.backgroundColor="steelblue";
  this.classList.add("selected");
  hardButton.classList.remove("selected");
  //generate new color
  numberOfSquares=3;
  colors=generateRandomColors(numberOfSquares);
  //pick a new color from the array for colorPicked
  colorDisplay.textContent=pickedColor=pickColor();
  //change colors of squares
  for(var i=0;i<squares.length;i++){
    if(colors[i]){
      squares[i].style.backgroundColor=colors[i];
    }else{
      squares[i].style.display="none";
    }
  }
})

hardButton.addEventListener("click",function(){
  //Changing the selected mode
  heading.style.backgroundColor="steelblue";
  this.classList.add("selected");
  easyButton.classList.remove("selected");
  //generate new color
  numberOfSquares=6;
  colors=generateRandomColors(numberOfSquares);
  //pick a new color from the array for colorPicked
  colorDisplay.textContent=pickedColor=pickColor();
  //change colors of squares
  for(var i=0;i<squares.length;i++){
    squares[i].style.display="block";
      squares[i].style.backgroundColor=colors[i];
  }
})
function changeColors(color){
  //loop through all the squares and change color to match given color
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=color;
  }
  heading.style.backgroundColor=color;
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
