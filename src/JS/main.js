const URL = 'https://rickandmortyapi.com/api/character';

nombres(URL);

async function nombres(link) {
	const info = await fetch(link);
	const res = await info.json();
	console.log(res.results[0].image);

	const imgSrc = res.results[0].image;
	createHTML(imgSrc);
}

function createHTML(imgLink) {
	const sectionElement = document.querySelector('.carousel__container');
	const divElement = document.createElement('div');
	divElement.classList.add(
		'carousel-item',
		'w-60',
		'h-72',
		'rounded-3xl',
		'mr-2',
		'cursor-pointer',
		'inline-block',
		'overflow-hidden',
		'relative',
		'bg-red-900'
	);
	divElement.innerHTML = `
	<img src="${imgLink}" alt="imagen jeje" class="object-cover w-full h-full">
	`;

	sectionElement.appendChild(divElement);
}
