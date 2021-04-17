var delayString = prompt("Enter delay in second to change page" , "5");
var delayInteger = parseInt(delayString) * 1000;

var sidebar = document.querySelector("nav#toolbar");
var refBtn = document.querySelector("#settings-btn");
var cloneBtn = refBtn.cloneNode(true);
cloneBtn.querySelector("h3").textContent = "Autoplay";
cloneBtn.querySelector("img").src = "https://m.media-amazon.com/images/G/01/Comics/web/i/assets/imgs/reader/rightnav.svg";
cloneBtn.id="autoplay-btn";
sidebar.appendChild(cloneBtn);
var state = 0;
var autoplayInterval = undefined;

cloneBtn.onclick = function(){
	if(state===0)
	{
		cloneBtn.querySelector("img").src = "https://m.media-amazon.com/images/G/01/Comics/web/i/assets/imgs/reader/exit.svg";
		console.log('Autoplay: ON');
		state = 1;
		autoplayInterval = setInterval(function(){ document.querySelector("button.right").click()} , delayInteger);
	}
	else
	{
		cloneBtn.querySelector("img").src = "https://m.media-amazon.com/images/G/01/Comics/web/i/assets/imgs/reader/rightnav.svg";
		console.log('Autoplay: OFF');
		state = 0;
		clearInterval(autoplayInterval);
	}
};

