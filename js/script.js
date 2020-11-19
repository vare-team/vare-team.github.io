window.onload = function() {
	let header = document.getElementById('header');

	window.addEventListener('scroll', function() {
		if (window.scrollY > 25) {
			header.classList.add("header-scrolled")
		} else {
			header.classList.remove("header-scrolled");
		}
	});
};