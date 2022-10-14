const URL = window.location.href+'api';

const form = document.querySelector('form');
const generatedUrl = document.querySelector('#generated-url');
const generatedImage = document.querySelector('#generated-image');

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	
	const formData = new FormData(form);
	
	let string = `${URL}/?`;
	for(let pair of formData.entries()) {
		string += `${pair[0]}=${encodeURIComponent(pair[1])}&`;
	}

	generatedUrl.href = string;
	generatedUrl.innerText = string;

	generatedImage.src = string;
});

form.addEventListener('reset', (e) => {
	e.preventDefault();

	for(let input of form.querySelectorAll('input')) {
		if(input.type === 'text') {
			input.value = '';
		}
		
		if(input.type === 'color') {
			input.value = '#FFFFFF';

			if(input.name === 'backgroundColor') {
				input.value = '#000000';
			}

		}
	}
});

const fontSelector = document.querySelector('#font');

const availableFonts = ['Arial', 'Courier', 'Impact', 'Times', 'Verdana' , 'Monospace'];

availableFonts.forEach((font) => {
	const option = document.createElement('option');
	option.value = font;
	option.innerText = font;
	option.style.fontFamily = font;
	fontSelector.appendChild(option);
	fontSelector.value = 'Monospace';
});

