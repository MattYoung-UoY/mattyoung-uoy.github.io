var titBarH;
var winH;

function load(){
	winH = window.innerHeight;
	resize();
}

function resize(){
	titBarH = document.getElementById('titleBar').clientHeight / winH;
	titBarH += 0.001;
	update();
}

function update(){
	var scroll = window.pageYOffset / window.innerHeight;
	var navYOffset = titBarH - scroll;
	if(navYOffset < 0) navYOffset = 0;
	document.getElementById('navbar').style.top = (navYOffset * 100) + "%";
}