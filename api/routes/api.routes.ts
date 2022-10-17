import { Router } from 'express';
const router = Router();

import generate from '../templates/main';
import nodeHtmlToImage from 'node-html-to-image';

router.route('/')
	.get(async function(req, res) {
		const { backgroundColor, title, titleColor, text, textColor , font} = req.query as {[key: string]: string};
        
		const html = generate({backgroundColor, title, titleColor, text, textColor , font});

		const image = await nodeHtmlToImage({html});

		res.header('Content-Type', 'image/png');
		res.header('Cache-Control', 'max-age=604800');
		res.send(image);
	});


export default router;