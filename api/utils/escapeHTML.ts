const entityMap: {[key: string]: string} = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	'\'': '&#39;',
	'/': '&#x2F;',
	'`': '&#x60;',
	'=': '&#x3D;'
};
  
export default function escapeHtml (string: string) {
	if(!string) return undefined;

	const entityMapString = Object.keys(entityMap).join('');

	const entityRegex = new RegExp(`[${entityMapString}]`, 'g');

	return String(string).replace(entityRegex, (s) => {
		return entityMap[s];
	});
}