const pinnedImages = document.querySelectorAll('.pinned-image');

pinnedImages.forEach(pinnedImage => {
	const container = pinnedImage.querySelector('.pinned-image__container');
	const image = container.querySelector('img');
	const overlay = container.querySelector('.pinned-image__container-overlay');
	const quote = pinnedImage.querySelector('.pinned-image__quote');
	const tl = gsap.timeline({paused: true});
	tl.to(container, {
		scale: 1.1,
	}, 0);
	tl.from(quote, {
		autoAlpha: 0,
	}, 0);
	tl.from(overlay, {
		autoAlpha: 0,
	}, 0);
	const trigger = ScrollTrigger.create({
		animation: tl,
		trigger: pinnedImage,
		start: "top top",
		markers: false,
		pin: true,
		scrub: true,
	});
});