// import { BottomNavigation, BottomNavigationAction } from '@mui/material'
// import HomeIcon from '@mui/icons-material/Home'
// import QueryStatsIcon from '@mui/icons-material/QueryStats'
// import TextsmsIcon from '@mui/icons-material/Textsms'
// import AccountCircleIcon from '@mui/icons-material/AccountCircle'
// import { useEffect, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// const MobileFooter = () => {
// 	const location = useLocation()
// 	const { pathname } = location
// 	const navigate = useNavigate()
// 	const [value, setValue] = useState(0)

// 	useEffect(() => {
// 		if (pathname === '/') {
// 			setValue(() => 0)
// 		}
// 		if (pathname === '/register') {
// 			setValue(() => 1)
// 		}
// 		if (pathname === '/mypage') {
// 			setValue(() => 2)
// 		}
// 		// if (pathname === '/market_price') {
// 		// 	setValue(() => 1)
// 		// }
// 		// if (pathname === '/chat') {
// 		// 	setValue(() => 3)
// 		// }
// 	}, [pathname])

// 	return (
// 		<BottomNavigation
// 			sx={{
// 				'& .Mui-selected': {
// 					color: '#656565',
// 				},
// 				'& .Mui-selected > svg': {
// 					color: '#FA7100',
// 				},
// 				position: 'absolute',
// 				width: '100%',
// 				bottom: '0',
// 				borderTop: '1px solid #D9D9D9',
// 				height: '60px',
// 				fontSize: 10,
// 			}}
// 			value={value}
// 			={(event, newValue) => {
// 				setValue(newValue)
// 			}}
// 		>
// 			<BottomNavigationAction
// 				onClick={() => navigate('/')}
// 				label="홈"
// 				icon={<HomeIcon sx={{ fontSize: 30 }} />}
// 			/>
// 			<BottomNavigationAction
// 				onClick={() => navigate('market_price')}
// 				label="시세조회"
// 				icon={<QueryStatsIcon sx={{ fontSize: 30 }} />}
// 			/>
// 			{/* <BottomNavigationAction
// 				onClick={() => navigate('register')}
// 				icon={
// 					<AddCircleIcon
// 						sx={{ fontSize: 70, marginBottom: '40px', color: '#FA7100' }}
// 					/>
// 				}
// 			/> */}
// 			<BottomNavigationAction
// 				onClick={() => navigate('chat')}
// 				label="채팅"
// 				icon={<TextsmsIcon sx={{ fontSize: 30 }} />}
// 			/>
// 			<BottomNavigationAction
// 				onClick={() => navigate('/mypage')}
// 				label="내 정보"
// 				icon={<AccountCircleIcon sx={{ fontSize: 30 }} />}
// 			/>
// 		</BottomNavigation>
// 	)
// }
// export default MobileFooter
