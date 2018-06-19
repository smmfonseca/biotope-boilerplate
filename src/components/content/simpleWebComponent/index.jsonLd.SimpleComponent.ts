import SimpleComponent from './SimpleComponent';

@biotopeStoreConnector({
	store: window['biotope'].store,
	injector: {
		type: 'jsonLd',
		config: {}
	}
})
export default class IndexJsonLdSimpleComponent extends SimpleComponent {}
