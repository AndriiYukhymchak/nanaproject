var background = new Image();
background.src="Images/background.jpeg";
var foreground = new Image();
foreground.src="Images/foreground.png";
var play = new Image();
play.src="Images/play.png";
var init = function() {
//Get handler for game canvas and context
var canvas1 = document.getElementById('backgroundcanvas');
var context1 = canvas1.getContext('2d');
var canvas2 = document.getElementById('menucanvas');
var context2 = canvas2.getContext('2d');
// Hide all game layers and display the start screen
context1.drawImage(background,0,0);
context1.drawImage(foreground,0,0);
context2.drawImage(play,150,150);
}
}
var game={
	init:function(){
	state='working';
	}
}
window.onload = function() {
init();
};