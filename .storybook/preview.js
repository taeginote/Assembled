import GlobalStyles from '../src/Styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/Styles/theme'

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
}

export default preview

export const decorators = [
	Story => (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Story />
		</ThemeProvider>
	),
]
