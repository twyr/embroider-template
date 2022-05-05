import babel from '@rollup/plugin-babel';
import { Addon } from '@embroider/addon-dev/rollup';

const addon = new Addon({
	srcDir: 'addon',
	destDir: 'dist'
});

const onWarne = function onWarne(warning) {
	// Silence warning
	if (
		warning.code === 'CIRCULAR_DEPENDENCY' ||
		warning.code === 'EVAL' ||
		warning.code === 'UNRESOLVED_IMPORT'
	) {
		return;
	}

	console.warn(`(!) ${warning.message}`);
};

export default {
	// Console stuff to debug the build process
	onwarn: onWarne,

	// This provides defaults that work well alongside `publicEntrypoints` below.
	// You can augment this if you need to.
	output: addon.output(),

	plugins: [
		// These are the modules that users should be able to import from your
		// addon. Anything not listed here may get optimized away.
		addon.publicEntrypoints([
			'components/**/*.js',
			'helpers/**/*.js',
			'initializers/**/*.js',
			'modifiers/**/*.js',
			'services/**/*.js',
			'utils/**/*.js'
		]),

		// These are the modules that should get reexported into the traditional
		// "app" tree. Things in here should also be in publicEntrypoints above, but
		// not everything in publicEntrypoints necessarily needs to go here.
		addon.appReexports([
			'components/**/*.js',
			'helpers/**/*.js',
			'initializers/**/*.js',
			'modifiers/**/*.js',
			'services/**/*.js',
			'utils/**/*.js'
		]),

		// This babel config should *not* apply presets or compile away ES modules.
		// It exists only to provide development niceties for you, like automatic
		// template colocation.
		// See `babel.config.json` for the actual Babel configuration!
		babel({ babelHelpers: 'bundled' }),

		// Ensure that standalone .hbs files are properly integrated as Javascript.
		addon.hbs(),

		// addons are allowed to contain imports of .css files, which we want rollup
		// to leave alone and keep in the published output.
		addon.keepAssets(['**/*.css', '**/*.scss']),

		// Remove leftover build artifacts when starting a new build.
		addon.clean()
	]
};
