var delayString = prompt("Enter delay in second to change page" , "5");
var delayInteger = parseInt(delayString) * 1000;

if (document.querySelector("#autoplay-btn")){
	document.querySelector("#autoplay-btn").remove();
	if (typeof window.autoplayInterval !== 'undefined') {
		clearInterval(window.autoplayInterval);
	}
}



var sidebar = document.querySelector("nav#toolbar");
var refBtn = document.querySelector("#settings-btn");
var cloneBtn = refBtn.cloneNode(true);
cloneBtn.querySelector("h3").textContent = "Autoplay";
cloneBtn.querySelector("img").src = "https://m.media-amazon.com/images/G/01/Comics/web/i/assets/imgs/reader/rightnav.svg";
cloneBtn.id="autoplay-btn";
sidebar.appendChild(cloneBtn);
var state = 0;

cloneBtn.onclick = function(){
	if(state===0)
	{
		cloneBtn.querySelector("img").src = "https://m.media-amazon.com/images/G/01/Comics/web/i/assets/imgs/reader/exit.svg";
		console.log('Comixology Autoplay: ON');
		state = 1;
		window.autoplayInterval = setInterval(function(){ document.querySelector("button.right").click()} , delayInteger);
	}
	else
	{
		cloneBtn.querySelector("img").src = "https://m.media-amazon.com/images/G/01/Comics/web/i/assets/imgs/reader/rightnav.svg";
		console.log('Comixology Autoplay: OFF');
		state = 0;
		clearInterval(window.autoplayInterval);
	}
};

