function pageLoaded(){
game.init();
var canvas = document.getElementById('gamecanvas'); 
var context = canvas.getContext('2d');

var background = new Image();
background.src="Images/background.jpeg";
background.onload=function(){
context.drawImage(background,0,0);
}
}
var game={
	init:function(){
	state='working';
	}
}