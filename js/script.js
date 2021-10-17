function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}

const swiper = new Swiper('.swiper', {
	speed: 1000,
	spaceBetween: 0,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

let observer = new IntersectionObserver(onEntry, { threshold: [0.25] });
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
	observer.observe(elm);
}