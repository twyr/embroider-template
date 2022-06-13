import Controller from '@ember/controller';
import debugLogger from 'ember-debug-logger';

import { getConfig } from '@embroider/macros';

export default class ApplicationController extends Controller {
	// #region Accessed Services
	// #endregion

	// #region Tracked Attributes
	// #endregion

	// #region Untracked Public Fields
	embroiderAddonConfig = getConfig('@twyr/embroider-addon');
	// #endregion

	// #region Constructor
	constructor() {
		super(...arguments);
		this.#debug?.(
			`constructor::embroiderAddonConfig: `,
			this.embroiderAddonConfig
		);
	}
	// #endregion

	// #region Lifecycle Hooks
	// #endregion

	// #region DOM Event Handlers
	// #endregion

	// #region Computed Properties
	// #endregion

	// #region Private Methods
	// #endregion

	// #region Default Sub-components
	// #endregion

	// #region Private Attributes
	#debug = debugLogger?.('controller:application');
	// #endregion
}
