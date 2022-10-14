import escapeHtml from '../utils/escapeHTML';

interface GenerateOptions {
    backgroundColor?: string;

    title: string;
    titleColor?: string;

    text: string;
    textColor?: string;

    font?: string;
}

export default function generate(options: GenerateOptions) {
	const escapedOptions = Object.fromEntries(
		Object.entries(options).map(([key, value]) => [key, escapeHtml(value)])
	);

	console.log(escapedOptions);

	return `
    <html>
        <style>
            html , body {
                width: 1200px;
                height: 630px;
                margin: 0;
                padding: 0;
            }
            body {
                background-color: ${escapedOptions.backgroundColor || '#000000'};

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding: 1rem;
                box-sizing: border-box;

                font-family: ${escapedOptions.font || 'sans-serif'};
            }
            .title {
                font-size: 10rem;
                font-weight: bold;
                color: ${escapedOptions.titleColor || '#ffffff'};

                margin: 0;
                padding: 0;
            }
            .text {
                font-size: 5rem;
                color: ${escapedOptions.textColor || '#ffffff'};
                
                margin: 0;
                padding: 0;
            }
        </style>
        <body>
            <h1 class="title">${escapedOptions.title || 'Untitled'}</h1>
            <p class="text">${escapedOptions.text || ''}</p>
        </body>    
    </html>`;
}