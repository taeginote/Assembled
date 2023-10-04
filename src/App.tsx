import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import router from './Routes/router'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './Styles/global'
import theme from './Styles/theme'
import { RecoilRoot } from 'recoil'
import AuthProvider from './Contexts/auth'
import './Components/Firebase/messaging_init_in_sw'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
	const RouterObject = createBrowserRouter(router)

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				useErrorBoundary: true,
			},
		},
	})

	return (
		<>
			<AuthProvider>
				<QueryClientProvider client={queryClient}>
					<RecoilRoot>
						<ThemeProvider theme={theme}>
							<GlobalStyles />
							<RouterProvider router={RouterObject} />
						</ThemeProvider>
					</RecoilRoot>
					{/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
				</QueryClientProvider>
			</AuthProvider>
		</>
	)
}

export default App
