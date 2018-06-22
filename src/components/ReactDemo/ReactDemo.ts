import {hyper} from 'hyperhtml/esm';
import {BiotopeReduxStoreConnector} from "../../resources/ts/core/BiotopeReduxStoreConnector";
import {createInitialReactDemoState, ReactDemoState} from './ReactDemo.state';
import './ReactDemo.styles.scss';
import {createReactApp} from "./CreateReactApp";

export class ReactDemo extends HTMLElement {
	static componentName = 'react-demo-component';
	private html: any;
	private uid: string;
	private storeConnector: BiotopeReduxStoreConnector<ReactDemoState>;

	constructor() {
		super();
		this.html = hyper.bind(this);
	}

	connectedCallback() {
    	this.render(createInitialReactDemoState());
	}

  render(state: ReactDemoState) {
		return createReactApp(state, this);
  }
}
if (!customElements.get(ReactDemo.componentName)) {
	customElements.define(ReactDemo.componentName, ReactDemo);
}
