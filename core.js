var background = new Image();
background.src="Images/background.jpeg";
var foreground = new Image();
foreground.src="Images/foreground.png";
var play = new Image();
play.src = "Images/play.png";

var game={
	state:"working",
    canvases:[],
    contextes:[]
}
var clicker = function(event){
    console.log(event.offsetX,event.offsetY);
}
var addMouseControl = function(canvas,listener){
    canvas.addEventListener('click',listener,false);
}
window.onload = function() {
init();
};

var init = function () {
    var canvas1 = document.getElementById('backgroundcanvas');
    var context1 = canvas1.getContext('2d');
    var canvas2 = document.getElementById('menucanvas');
    var context2 = canvas2.getContext('2d');
    context1.drawImage(background, 0, 0);
    context1.drawImage(foreground, 0, 0);
    var playbutton = new menu(play);
    playbutton.show(context2, 150, 150);
    addMouseControl(canvas2,clicker);
};