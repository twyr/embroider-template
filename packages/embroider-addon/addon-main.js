'use strict';

const { addonV1Shim } = require('@embroider/addon-shim');
const shimmed = addonV1Shim(__dirname);

const embbroiderAddonBuildHooks = {
	config() {
		return {
			'embroider-addon': {
				insert: true
			}
		};
	},

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

		console.log(
			`\nEmbbroiderAddonBuildHooks::BODY FOOTER BUILD HOOK:\nCONFIG: ${JSON.stringify(
				config,
				null,
				'\t'
			)}\nCONTENT: ${content}\n`
		);

		config.embaddonBodyFooterInvoked = true;
		return `<span>CONTENT FOR BODY FOOTER</span>`;
	}
};

const exported = Object.assign({}, shimmed, embbroiderAddonBuildHooks);
module.exports = exported;
