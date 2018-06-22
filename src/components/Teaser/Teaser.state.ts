export interface TeaserState {
	teaserCopy: string;
	teaserImg: string;
}

export const createInitialTeaserState = (): TeaserState => ({
	teaserCopy: 'Sahnehäufchen',
	teaserImg: './resources/img/doge.jpg'
});
