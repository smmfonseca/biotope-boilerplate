import * as React from 'react';
import {Headline} from "./Headline";
import {ReactDemoState} from "./ReactDemo.state";
import '../Teaser/Teaser';

//would need to be declared in teaser-component
declare global {
	namespace JSX {
		interface IntrinsicElements {
			'teaser-component': any
		}
	}
}

export class App extends React.Component<ReactDemoState> {
	render(): JSX.Element {
		return(
			<div>
				<Headline headlineTitle={this.props.headlineTitle} headlineCopy={this.props.headlineCopy}/>
				<teaser-component></teaser-component>
			</div>
		);
	}
}
