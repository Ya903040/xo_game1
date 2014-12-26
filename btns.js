var move=0;
var pole = [["0","0","0"],["0","0","0"],["0","0","0"]];


(function() {

var Button = function(label, color, dim) {
  this.initialize(label, color, dim);
}
var p = Button.prototype = new createjs.Container(); // inherit from Container

p.label;
p.background;
p.count = 0;
p.empty = 0;
p.xx = 0;
p.yy = 0;

p.Container_initialize = p.initialize;
p.initialize = function(label, color, dim) {
  this.Container_initialize();
  
  this.label = label;
  if (!color) { color = "#CCC"; }
  
  var txt = new createjs.Text(label, "60px Arial", "#000");
  txt.textBaseline = "top";
  txt.textAlign = "center";
  
 // var width = 100;
 // var height = 100;
  
  this.background = new createjs.Shape();
  console.log(dim);
  this.background.graphics.beginFill(color).drawRoundRect(0,0,dim,dim,10);
  
  txt.x = dim/2;
  txt.y = dim/3;
  //text.text="B";
  
  this.addChild(this.background,txt); 
  this.on("click", this.handleClick);

  this.mouseChildren = false;
} 

p.handleClick = function (event) {    
  var target = event.target;
  
  if (target.empty!=1)
  {
    move++;
  if (move%2==0)
    target.getChildAt(1).text="X";
  else
    target.getChildAt(1).text="O";
  target.empty = 1;
  
  pole[target.xx][target.yy]=target.getChildAt(1).text;
  if ((pole[0][0]=="O" && pole[1][1]=="O" && pole[2][2]=="O") ||
    (pole[2][0]=="O" && pole[1][1]=="O" && pole[0][2]=="O")  ||
    (pole[0][0]=="O" && pole[0][1]=="O" && pole[0][2]=="O")  ||
    (pole[1][0]=="O" && pole[1][1]=="O" && pole[1][2]=="O")  ||
    (pole[2][0]=="O" && pole[2][1]=="O" && pole[2][2]=="O")  ||
    (pole[0][1]=="O" && pole[1][1]=="O" && pole[2][1]=="O")  ||
    (pole[0][2]=="O" && pole[1][2]=="O" && pole[2][2]=="O")  ||
    (pole[0][0]=="O" && pole[1][0]=="O" && pole[2][0]=="O") 
    )
  {
  //  alert("O win");
  var txt1 = new createjs.Text("O WIN", "20px Arial", "#000");
  txt1.textBaseline = "top";
  txt1.textAlign = "center";
  txt1.x = wii/2;
  txt1.y = 10;
  this.stage.addChild(txt1);
  }
  if
((pole[0][0]=="X" && pole[1][1]=="X" && pole[2][2]=="X") ||
(pole[2][0]=="X" && pole[1][1]=="X" && pole[0][2]=="X") ||
(pole[0][0]=="X" && pole[0][1]=="X" && pole[0][2]=="X") ||
(pole[1][0]=="X" && pole[1][1]=="X" && pole[1][2]=="X") ||
(pole[2][0]=="X" && pole[2][1]=="X" && pole[2][2]=="X") ||
(pole[0][1]=="X" && pole[1][1]=="X" && pole[2][1]=="X") ||
(pole[0][2]=="X" && pole[1][2]=="X" && pole[2][2]=="X") ||
(pole[0][0]=="X" && pole[1][0]=="X" && pole[2][0]=="X"))
{
  var txt = new createjs.Text("X WIN", "20px Arial", "#000");
  txt.textBaseline = "top";
  txt.textAlign = "center";
  txt.x = wii/2;
  txt.y = 10;
  this.stage.addChild(txt);
  //alert("X win");
}
this.stage.update();
  
  }
  
} 


window.Button = Button;
}());