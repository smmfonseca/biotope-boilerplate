import * as ReactDOM from 'react-dom';
import {App} from "./App";
import * as React from 'react';
import {ReactDemoState} from "./ReactDemo.state";

export const createReactApp = (state: ReactDemoState, element: HTMLElement) => {
	 return ReactDOM.render(
		<App headlineTitle={state.headlineTitle} headlineCopy={state.headlineCopy}/>,
		element
	);
};
