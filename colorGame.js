// Declare private attributes
var numberOfSquares=6;
var colors = [];
var pickedColor;
var clickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay =document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var playAgainButton=document.querySelector("#reset");
var heading=document.querySelector("h1");
var modeButtons=document.querySelectorAll(".mode");

init();

//initializing the webpage
function init(){
  //mode butttons event listeners
  setUpModeButtons();
  //Square event listener
  setUpSquares();
  //Play button event listener
  setUpPlayButton();
  reset();
}

function setUpModeButtons(){
  for(var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent==="Easy"?numberOfSquares=3:numberOfSquares=6;
      reset();
    })
  }
}

function setUpSquares(){
  for(var i=0;i<squares.length;i++){
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
}

function setUpPlayButton(){
  playAgainButton.addEventListener("click",function(){
    reset();
  })
}

function reset(){
  //change button text
  playAgainButton.textContent="New Colors";
  messageDisplay.textContent="";
  //generate new color
  colors=generateRandomColors(numberOfSquares);
  //pick a new color from the array for colorPicked
  colorDisplay.textContent=pickedColor=pickColor();
  //change colors of squares
  for(var i=0;i<squares.length;i++){
    if(colors[i]){
      squares[i].style.display="block";
      squares[i].style.backgroundColor=colors[i];
    }else{
      squares[i].style.display="none";
    }
  }
  //Reset color of h1
  heading.style.backgroundColor="steelblue";
}

//===================================
//Helper functions
//===================================
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
