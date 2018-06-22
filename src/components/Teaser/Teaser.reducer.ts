import {Reducer} from 'redux';
import {ComponentAction} from '../../resources/ts/state/ComponentAction';
import {createInitialTeaserState, TeaserState} from "./Teaser.state";

const reducerCreator: (componentId: string) => Reducer = (componentId: string) =>
	(state: TeaserState = createInitialTeaserState(), action: ComponentAction): TeaserState => {
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
