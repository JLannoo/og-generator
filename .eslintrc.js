module.exports = {
	'env': {
		'es2021': true,
		'node': true,
		'browser': true,
	},
	'extends': ['eslint:recommended',
		'plugin:@typescript-eslint/recommended'],
	'overrides': [],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': ['@typescript-eslint'],
	'rules': {
		'indent': ['error','tab'],
		'linebreak-style': ['error','windows'],
		'quotes': ['error','single'],
		'semi': ['error','always'],
		'array-bracket-newline': ['error','never'],
	}
};
