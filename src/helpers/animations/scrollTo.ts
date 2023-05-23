const scrollTo = (element: HTMLElement) => {
	let bodyRect = document.body.getBoundingClientRect();
	let elemRect = element.getBoundingClientRect();
	let offset = elemRect.top - bodyRect.top;

	window.scrollTo({
		top: offset - 100, // subtract the desired offset, in this case, 100px
		behavior: 'smooth',
	});
};

export default scrollTo;