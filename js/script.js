window.onload = function() {
	let header = document.getElementById('header'),
			headernav = document.getElementById('header-nav'),
			mobilebutton = document.getElementById('mobile-menu');


	window.addEventListener('click', function({target}){
		if (mobilebutton.contains(target)){
			toggleHamburger();
		} else {
			removeHamburger();
		}
	});


	function toggleHamburger(){
		headernav.classList.toggle("showNav");
		header.classList.toggle("header-background");
	}
	function removeHamburger(){
		headernav.classList.remove("showNav");
		header.classList.remove("header-background");
	}


	if (window.scrollY > 25) header.classList.add("header-scrolled");

	window.addEventListener('scroll', function() {
		if (window.scrollY > 25) {
			header.classList.add("header-scrolled")
		} else {
			header.classList.remove("header-scrolled");
		}
	});
};