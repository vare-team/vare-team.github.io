function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}

function scrollToElement(element) {
	document.getElementById(element).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

const swiper = new Swiper('.swiper', {
	autoplay: {
		delay: 10000,
	},
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	speed: 2000,
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