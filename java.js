var colNum = 1;

var xMouse = 0;
var yMouse = 0
var xME = 0;
var yME = 0;


var x = 0;
var y = 0

var x2 = 200;
var y2 = 150;
var x3 = 700;
var y3 = 400;
var x4 = 300;
var y4 = 100;
var x5 = 0;
var y5 = 0
var x6 = 200;
var y6 = 150;
var x7 = 700;
var y7 = 400;
var x8 = 300;
var y8 = 100;
var moveX = 1;
var moveY = 1;
var moveX2 = -1;
var moveY2 = 1;
var moveX3 = 1;
var moveY3 = -1;
var moveX4 = -1;
var moveY4 = -1;
var moveX5 = 1;
var moveY5 = 1;
var moveX6 = -1;
var moveY6 = 1;
var moveX7 = 1;
var moveY7 = -1;
var moveX8 = -1;
var moveY8 = -1;
var timer = 0;
var loadBar;
var loadProc = 100.0;
function start(){
	//document.getElementById("sound").controls = false;
	alert("Virus Found!");
	mainLoop();
	loadBar = document.getElementById("Loading");
}



document.addEventListener("mousemove",function(event){
                
    xMouse = event.clientX;
    yMouse = event.clientY;
                
});





function mainLoop(){
	document.getElementById("sound").play();
	//document.getElementById("tradet").click();
	if(1==1)
	{
	var erik = document.getElementById("ERIK");
	var erik2 = document.getElementById("ERIK2");
	var erik3 = document.getElementById("ERIK3");
	var erik4 = document.getElementById("ERIK4");
	var erik5 = document.getElementById("ERIK5");
	var erik6 = document.getElementById("ERIK6");
	var erik7 = document.getElementById("ERIK7");
	var erik8 = document.getElementById("ERIK8");
	var erikM = document.getElementById("ERIKMOUSE");
	var body = document.getElementById("body");
	var text = document.getElementById("template");
	x = x + moveX * 5;
	y = y + moveY * 5;
	x2 = x2 + moveX2 *10;
	y2 = y2 + moveY2 *10;
	x3 = x3 + moveX3 *25;
	y3 = y3 + moveY3 *25
	x4 = x4 + moveX4 *70;
	y4 = y4 + moveY4 *70;
	x5 = x5 + moveX5 * 7;
	y5 = y5 + moveY5 * 7;
	x6 = x6 + moveX6 *3;
	y6 = y6 + moveY6 *3;
	x7 = x7 + moveX7 *45;
	y7 = y7 + moveY7 *45
	x8 = x8 + moveX8 *1;
	y8 = y8 + moveY8 *1;
	erik.style.position = "absolute";
	erik.style.left = x+'px';
	erik.style.top = y+'px';
	erik2.style.position = "absolute";
	erik2.style.left = x2+'px';
	erik2.style.top = y2+'px';
	erik3.style.position = "absolute";
	erik3.style.left = x3+'px';
	erik3.style.top = y3+'px';
	erik4.style.position = "absolute";
	erik4.style.left = x4+'px';
	erik4.style.top = y4+'px';
	erik5.style.position = "absolute";
	erik5.style.left = x5+'px';
	erik5.style.top = y5+'px';
	erik6.style.position = "absolute";
	erik6.style.left = x6+'px';
	erik6.style.top = y6+'px';
	erik7.style.position = "absolute";
	erik7.style.left = x7+'px';
	erik7.style.top = y7+'px';
	erik8.style.position = "absolute";
	erik8.style.left = x8+'px';
	erik8.style.top = y8+'px';
	erikM.style.position = "absolute";
	erikM.style.left = xME+'px';
	erikM.style.top = yME+'px';
	if(x > (window.innerWidth - erik.width)){
		moveX = -1;
	}
	if(x < 0){
		moveX = 1;
	}
	if(y > (window.innerHeight - erik.height)){
		moveY = -1;
	}
	if(y < 0){
		moveY = 1;
	}
	
	
	
	if(x2 > (window.innerWidth - erik.width)){
		moveX2 = -1;
	}
	if(x2 < 0){
		moveX2 = 1;
	}
	if(y2 > (window.innerHeight - erik.height)){
		moveY2 = -1;
	}
	if(y2 < 0){
		moveY2 = 1;
	}
	
	
	if(x3 > (window.innerWidth - erik.width)){
		moveX3 = -1;
	}
	if(x3 < 0){
		moveX3 = 1;
	}
	if(y3 > (window.innerHeight - erik.height)){
		moveY3 = -1;
	}
	if(y3 < 0){
		moveY3 = 1;
	}
	
	
	if(x4 > (window.innerWidth - erik.width)){
		moveX4 = -1;
	}
	if(x4 < 0){
		moveX4 = 1;
	}
	if(y4 > (window.innerHeight - erik.height)){
		moveY4 = -1;
	}
	if(y4 < 0){
		moveY4 = 1;
	}
	
	
	if(x5 > (window.innerWidth - erik.width)){
		moveX5 = -1;
	}
	if(x5 < 0){
		moveX5 = 1;
	}
	if(y5 > (window.innerHeight - erik.height)){
		moveY5 = -1;
	}
	if(y5 < 0){
		moveY5 = 1;
	}
	
	
	
	if(x6 > (window.innerWidth - erik.width)){
		moveX6 = -1;
	}
	if(x6 < 0){
		moveX6 = 1;
	}
	if(y6 > (window.innerHeight - erik.height)){
		moveY6 = -1;
	}
	if(y6 < 0){
		moveY6 = 1;
	}
	
	
	
	if(x7 > (window.innerWidth - erik.width)){
		moveX7 = -1;
	}
	if(x7 < 0){
		moveX7 = 1;
	}
	if(y7 > (window.innerHeight - erik.height)){
		moveY7 = -1;
	}
	if(y7 < 0){
		moveY7 = 1;
	}
	
	
	
	if(x8 > (window.innerWidth - erik.width)){
		moveX8 = -1;
	}
	if(x8 < 0){
		moveX8 = 1;
	}
	if(y8 > (window.innerHeight - erik.height)){
		moveY8 = -1;
	}
	if(y8 < 0){
		moveY8 = 1;
	}
	
	
	if(xME < xMouse - erik.width / 2){
		xME += 0.2 * (xMouse - erik.width / 2 - xME);
	}
	if(xME > xMouse - erik.width / 2){
		xME -= 0.2 * (xME - xMouse + erik.width / 2);
	}
	if(yME < yMouse - erik.height / 2){
		yME += 0.2 * (yMouse - yME - erik.height / 2);
	}
	if(yME > yMouse - erik.height / 2){
		yME -= 0.2 * (yME - yMouse + erik.height / 2);
	}
	
	}
	
	if(colNum == 1){
		body.style.backgroundColor = "blue";
		text.style.color="red";
		template.style.fontSize="30px";
	}
	if(colNum == 2){
		body.style.backgroundColor = "red";
		text.style.color="yellow";
		template.style.fontSize="50px";
	}
	if(colNum == 3){
		body.style.backgroundColor = "yellow";
		text.style.color="green";
		template.style.fontSize="70px";
	}
	if(colNum == 4){
		body.style.backgroundColor = "green";
		text.style.color="magenta";
		template.style.fontSize="90px";
	}
	if(colNum == 5){
		body.style.backgroundColor = "magenta";
		text.style.color="blue";
		colNum = 0;
		loadProc-= 0.03;
		loadBar.style.width = loadProc+'%';
		template.style.fontSize="110px";
	}
	
	//document.getElementById("template").innerHTML = new Date().toLocaleTimeString();
	timer++;
	if(timer > 5){
		timer = 0;
		colNum++;
	}
    requestAnimationFrame(mainLoop);
}
