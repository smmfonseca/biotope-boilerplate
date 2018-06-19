import {SimpleComponent} from './SimpleComponent';

@biotopeStoreConnector({
	store: window['biotope'].store,
	injector: {
		type: 'rehydrate',
		config: {
			'.simpleComponent__counter': 'counter'
		}
	}
})
export default class IndexRehydrateSimpleComponent extends SimpleComponent {}
