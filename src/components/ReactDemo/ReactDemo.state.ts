export interface ReactDemoState {
	headlineTitle: string;
	headlineCopy: string;
}

export const createInitialReactDemoState = (): ReactDemoState => ({
	headlineTitle: 'I am a Headline',
	headlineCopy: 'Exceedingly informative and eloquent content. So much. Very wow.'
});
