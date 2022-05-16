'use strict';

const { addonV1Shim } = require('@embroider/addon-shim');
const shimmed = addonV1Shim(__dirname);

const embbroiderAddonBuildHooks = {
	name: require('./package.json').name,

	options: {
		'@embroider/macros': {
			setOwnConfig: {
				verySimple1: false,
				verySimple2: false
			}
		}
	},

	// #region Config
	config() {
		return this.options['@embroider/macros']['setOwnConfig'];
	},
	// #endregion

	// #region Content Injections
	contentFor(type, config, content) {
		let retValue = null;
		switch (type) {
			case 'body-footer':
				retValue = this._contentForBodyFooter(config, content);
				break;
		}

		return retValue;
	},

	_contentForBodyFooter(config, content) {
		if (config.embaddonBodyFooterInvoked) return null;
		config.embaddonBodyFooterInvoked = true;

		const pkgName = require('./package.json').name;
		const addonconfig = config[pkgName] ?? this.config();
		console.log(
			`\nEmbbroiderAddonBuildHooks::BODY FOOTER BUILD HOOK::CONFIG: ${JSON.stringify(
				addonconfig,
				null,
				'\t'
			)}\n`
		);

		let addonContent = content;
		if (addonconfig.verySimple1 || addonconfig.verySimple2)
			addonContent = `<span>CONTENT FOR BODY FOOTER</span>`;

		return addonContent;
	}
	// #endregion
};

const exported = Object.assign({}, shimmed, embbroiderAddonBuildHooks);
module.exports = exported;
