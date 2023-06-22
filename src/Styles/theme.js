const MEDIA = {
	mobile: '414px',
	tablet: '820px',
	laptop: '1440px',
}

const COLOR = {
	main: '#FB9B00',
	hover: '#FA7100',
	sub: '#FCBA5C',
	orange: '#FDD19B',
	button: '#070707',
	common: {
		white: '#FFF',
		black: '#000',
		gray: {
			100: '#EEE', // shape 용도
			200: '#777', // text 용도
			300: '#AAA', // button 용도
			400: '#CCC', // select 용도
		},
	},
	success: '#1B842C',
	error: '#F44336',
}

const FONT_SIZE = {
	ss: '1.0rem',
	tiny: '1.4rem',
	xs: '1.6rem',
	small: '1.8rem',
	medium: '2.0rem',
	xslarge: '2.1rem',
	large: '2.6rem',
	big: '3.6rem',
	huge: '4.8rem',
}

const FONT_WEIGHT = {
	light: 'LINESeed-Th',
	regular: 'LINESeed-Rg',
	bold: 'LINESeed-Bd',
}

const theme = {
	MEDIA,
	COLOR,
	FONT_SIZE,
	FONT_WEIGHT,
}

export default theme
