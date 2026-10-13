document.getElementById("switch-to-sign").addEventListener('click', (event)=>{
	event.preventDefault();
	document.querySelector(".wrapper").classList.add("hidden");
})

document.getElementById("switch-to-login").addEventSListener('click' , (event)=>{
	event.preventDefault();
	document.querySelector(".wrapper").classList.remove("hidden");
})