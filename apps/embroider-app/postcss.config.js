'use strict';

module.exports = {
	plugins: [
		require('postcss-import'),
		require('tailwindcss/nesting')(require('postcss-nesting')),
		require('tailwindcss'),
		require('postcss-preset-env')({
			browsers: 'last 2 versions',
			stage: 3,
			autoprefixer: {
				grid: false
			},
			features: {
				'nesting-rules': false
			}
		})
	]
};
