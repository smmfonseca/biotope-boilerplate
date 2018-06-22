import {Reducer} from 'redux';
import {ComponentAction} from '../../resources/ts/state/ComponentAction';
import {createInitialReactDemoState, ReactDemoState} from "./ReactDemo.state";

const reducerCreator: (componentId: string) => Reducer = (componentId: string) =>
	(state: ReactDemoState = createInitialReactDemoState(), action: ComponentAction): ReactDemoState => {
		if (action.id == componentId) {
			switch (action.type) {
				default:
				return state;
			}
		} else {
			return state;
		}
};

export default reducerCreator;
