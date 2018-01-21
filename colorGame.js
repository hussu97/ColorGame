// Declare private attributes
var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];
var squares = document.querySelectorAll(".square");
var pickedColor =colors[3];
var colorDisplay =document.getElementById("colorDisplay");
var clickedColor;

colorDisplay.textContent=pickedColor;

for(var i=0;i<squares.length;i++){
  //Add colors to squares
  squares[i].style.backgroundColor=colors[i];
  //Adding listeners to squares
  squares[i].addEventListener("click",function(){
    clickedColor=this.style.backgroundColor;
    if(clickedColor===pickedColor){

    }else{

    }
  });
}
