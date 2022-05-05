export default class EmbbroiderAddonBuildHooks {
	// #region Public Fields
	// #endregion

	// #region Constructor
	constructor() {
		console?.log?.(`\n\nEmbbroiderAddonBuildHooks::constructor\n\n`);
	}
	// #endregion

	// #region Public Methods
	contentFor(type, config, content) {
		console?.log?.(
			`\n\nEmbbroiderAddonBuildHooks::CONTENT FOR BUILD HOOK: ${JSON?.stringify?.(
				arguments,
				null,
				'\t'
			)}\n\n`
		);

		let retValue = null;
		switch (type) {
			case 'body-footer':
				retValue = this?._contentForBodyFooter?.(config, content);
				break;
		}

		return retValue;
	}
	// #endregion

	// #region ContentFor Hooks
	_contentForBodyFooter(config, content) {
		console?.log?.(
			`\n\nEmbbroiderAddonBuildHooks::BODY FOOTER BUILD HOOK\n\n`
		);
		if (config?.embaddonBodyFooterInvoked) return null;

		config.embaddonBodyFooterInvoked = true;

		return content;
	}
	// #endregion

	// #region Private Methods
	// #endregion

	// #region Private Attributes
	// #endregion
}
