window.onload = function() {
	let header = document.getElementById('header'),
			headernav = document.getElementById('header-nav');

	document.getElementById('mobile-menu').addEventListener("click", toggleHamburger);

	function toggleHamburger(){
		headernav.classList.toggle("showNav");
		header.classList.toggle("header-background");
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