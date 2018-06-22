import {ReactDemoState} from "./ReactDemo.state";
import * as React from 'react';

export class Headline extends React.Component<ReactDemoState> {
	render(): JSX.Element {
		return (
			<div>
				<h1>{this.props.headlineTitle}</h1>
				<p>{this.props.headlineCopy}</p>
			</div>
		);
	}
}
