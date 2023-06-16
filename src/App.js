import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme'
import { RouterProvider } from 'react-router-dom'
import GlobalStyles from './Styles/global'
import router from './Routes/router'
import { RecoilRoot } from 'recoil'

function App() {
	return (
		<RecoilRoot>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={router} />
			</ThemeProvider>
		</RecoilRoot>
	)
}

export default App
