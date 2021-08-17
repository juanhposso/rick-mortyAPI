let arrayNumbers = []; // Agregamos los numeros sin repetir

// * Realiza las peticiones a la api pasa como parametro el array
async function nombres(number) {
	/* const URL = `https://rickandmortyapi.com/api/character/${number}`;
	const info = await fetch(URL);
	const res = await info.json();

	const imgSrc = res.image;
	createHTML(imgSrc); */

	number.forEach(async (idCharacter) => {
		//console.log(idCharacter);
		const URL = `https://rickandmortyapi.com/api/character/${idCharacter}`;
		console.log(URL);
		const info = await fetch(URL);
		const res = await info.json();

		const {
			image,
			name,
			origin: { url: urlLocation },
		} = res;

		if (urlLocation === '') {
			createHTML(image, name);
		} else {
			const urlDimension = await fetch(urlLocation);
			const dimensionResponse = await urlDimension.json();
			console.log(dimensionResponse.dimension);

			createHTML(image, name, dimensionResponse.dimension);
		}
	});
}

// * renderizar el HTML
function createHTML(imgLink, characterName, dime = 'unknown') {
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
	<div class="infoImg bg-black absolute -bottom-0 w-full text-white pl-3 pb-1 opacity-0">
		<span class="text-xl font-semibold">Nombre: </span> <p class="mb-3">${characterName}</p>
		<span class="text-xl font-semibold"> Dimension: </span> <p>${dime}</p></div>
	`;

	// * Div sobre info del personaje
	/* 	const imgAboutInfo = document.createElement('div');
	imgAboutInfo.classList.add('bg-gray-400', 'w-full', 'h-28', 'z-30');

	divElement.appendChild(imgAboutInfo); */
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
