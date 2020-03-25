onload  = start;

function start(){	
var img = 1;
function Move(){ 	
	img = (img%3)+1; // 4 is the Number of image in slider
	document.getElementById('img'+img).checked = true;
}
setInterval(Move,5000); //change img in 3 sec
}