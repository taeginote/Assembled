import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme'
import { RouterProvider } from 'react-router-dom'
import GlobalStyles from './Styles/global'
import router from './Routes/router'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<RouterProvider router={router} />
		</ThemeProvider>
	)
}

export default App
