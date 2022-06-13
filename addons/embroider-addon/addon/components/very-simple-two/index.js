/* eslint-disable ember/no-empty-glimmer-component-classes */
import Component from '@glimmer/component';
import debugLogger from 'ember-debug-logger';

import {
	getConfig,
	getGlobalConfig,
	getOwnConfig,
	isTesting,
	isDevelopingApp,
	macroCondition
} from '@embroider/macros';

export default class VerySimpleTwoComponent extends Component {
	// #region Accessed Services
	// #endregion

	// #region Tracked Attributes
	// #endregion

	// #region Untracked Public Fields
	addonConfig = JSON.stringify(
		getConfig('@twyr/embroider-addon'),
		null,
		'\t'
	);
	addonOwnConfig = JSON.stringify(getOwnConfig(), null, '\t');
	addonGlobalConfig = JSON.stringify(getGlobalConfig(), null, '\t');
	// #endregion

	// #region Constructor
	constructor() {
		super(...arguments);
		this.#debug?.(`constructor`);
	}
	// #endregion

	// #region Lifecycle Hooks
	// #endregion

	// #region DOM Event Handlers
	// #endregion

	// #region Modifier Callbacks
	// #endregion

	// #region Controls
	// #endregion

	// #region Computed Properties
	get codeEnvironment() {
		if (macroCondition(isDevelopingApp())) {
			return 'DEVELOPMENT';
		}

		if (macroCondition(isTesting())) {
			return 'TEST';
		}

		return 'PRODUCTION';
	}
	// #endregion

	// #region Private Methods
	// #endregion

	// #region Private Attributes
	#debug = debugLogger('component:very-simple-two');
	// #endregion
}
