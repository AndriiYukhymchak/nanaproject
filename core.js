var background = new Image();
background.src="Images/background.jpeg";
var foreground = new Image();
foreground.src="Images/foreground.png";
var init = function() {
//Get handler for game canvas and context
canvas = $('#gamecanvas')[0];
context = canvas.getContext('2d');
// Hide all game layers and display the start screen
$('#gamecanvas').hide();
$('#gamestartscreen').show();


}
$(window).load(function() {
init();
});
var showBackground = function() {
$('#gamestartscreen').hide();
$('#gamecanvas').show();
context.drawImage(foreground,0,0);
}