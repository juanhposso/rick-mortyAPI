let arrayNumbers = []; // Agregamos los numeros sin repetir

// * Realiza las peticiones a la api pasa como parametro el array
async function nombres(number) {
	number.forEach(async (idCharacter) => {
		const URL = `https://rickandmortyapi.com/api/character/${idCharacter}`;

		const info = await fetch(URL);
		const res = await info.json();
		//console.log(res.image);
		const imgSrc = res.image;
		createHTML(imgSrc);
	});
}

// * renderizar el HTML
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

// * crear el numero unico sin repetir
function randomNumber() {
	for (let index = 0; index < 15; index++) {
		const number = Math.floor(Math.random() * 671 + 1);
		if (arrayNumbers.includes(number)) {
			randomNumber();
		} else {
			//console.log(arrayNumbers);
			arrayNumbers.push(number);
		}
	}
	return nombres(arrayNumbers);
}

randomNumber();
