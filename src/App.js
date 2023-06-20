import { ThemeProvider } from 'styled-components'
import theme from './Styles/theme'
import { RouterProvider } from 'react-router-dom'
import GlobalStyles from './Styles/global'
import router from './Routes/router'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				useErrorBoundary: true,
			},
		},
	})

	return (
		<QueryClientProvider client={queryClient}>
			<RecoilRoot>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<RouterProvider router={router} />
				</ThemeProvider>
			</RecoilRoot>
		</QueryClientProvider>
	)
}

export default App
