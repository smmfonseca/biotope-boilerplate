import {hyper} from 'hyperhtml/esm';
import {BiotopeReduxStoreConnector} from "../../resources/ts/core/BiotopeReduxStoreConnector";
import TeaserReducerCreator from './Teaser.reducer';
import {createInitialTeaserState, TeaserState} from './Teaser.state';

import './Teaser.styles.scss';

export class Teaser extends HTMLElement {
	static componentName = 'teaser-component';
	private html: any;
	private uid: string;
	private storeConnector: BiotopeReduxStoreConnector<TeaserState>;

	constructor() {
		super();
		this.html = hyper.bind(this);
	}

	connectedCallback() {
		this.storeConnector = new BiotopeReduxStoreConnector<TeaserState>({
			store: window['biotope'].store,
			componentId: this.uid,
			reducerCreator: TeaserReducerCreator,
			triggerOnStateChange: (state: TeaserState, lastState: TeaserState) => {}
		});
		this.uid = this.storeConnector.getComponentId();

    this.render(createInitialTeaserState());
	}

  render(state: TeaserState) {
    return this.html`
	<div>
		<img class="doge" src="${state.teaserImg}"/>
		<p>${state.teaserCopy}</p>
	</div>`;
  }
}
if (!customElements.get(Teaser.componentName)) {
	customElements.define(Teaser.componentName, Teaser);
}
