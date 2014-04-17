var background = new Image();
background.src="Images/background.jpeg";
var foreground = new Image();
foreground.src="Images/foreground.png";
var play = new Image();
play.src = "Images/play.png";
var CanvasWidth = 640;
var CanvasHeight = 480;

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
    canvas1.height = CanvasHeight;
    canvas1.width = CanvasWidth;
    var canvas2 = document.getElementById('menucanvas');
    canvas2.height = CanvasHeight;
    canvas2.width = CanvasWidth;
    var canvas3 = document.getElementById('frontcanvas');
    canvas3.height = CanvasHeight;
    canvas3.width = CanvasWidth;
    var context1 = canvas1.getContext('2d');
    var context2 = canvas2.getContext('2d');
    var context3 = canvas3.getContext('2d');
    context1.drawImage(background, 0, 0);
    context1.drawImage(foreground, 0, 0);
    var playbutton = new menu(play);
    playbutton.show(context2, 150, 150);
    addMouseControl(canvas3,clicker);
};