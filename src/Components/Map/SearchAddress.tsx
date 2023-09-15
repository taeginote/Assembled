//https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json?consumer_key=33e5cb9d36b840a6a7e5&consumer_secret=c51d734855884b70b795
//consumer_key=33e5cb9d36b840a6a7e5
//consumer_secret=c51d734855884b70b795

//accessToken OAuth 인증키 API 호출 시 사용
// accessTimeout 1970년 1월1일 0시부터 현재까지의 초

//https://sgisapi.kostat.go.kr/OpenAPI3/addr/stage.json
//필수 accessToken
//cd는

import { styled } from 'styled-components'
import { FlexCenterCSS } from '../../Styles/common'
import { Cancel_big_Icon } from '../../Icons/Icons'
import { FlexBetweenCSS } from '../../Styles/common'
import { FlexColumnCSS } from '../../Styles/common'
import useGetAccessTokenData from '../../Hooks/Queries/get-mapAccessToken'
import useGetSearchAddressData from '../../Hooks/Queries/get-mapSearchAddress'
import { useEffect, useState } from 'react'

interface stateSido {
	previousSido: {
		name?: string
		cd?: string
	}
	currentSido: {
		name?: string
		cd?: string
	}
}
const SearchAddress = () => {
	const [sido, setSido] = useState<stateSido>({
		previousSido: {
			name: undefined,
			cd: undefined,
		},
		currentSido: {
			name: undefined,
			cd: undefined,
		},
	})

	const { data } = useGetAccessTokenData()
	const {
		data: getAddress,
		isLoading,
		refetch,
	} = useGetSearchAddressData({
		accessToken: data?.result?.accessToken,
		cd: sido.currentSido.cd,
	})
	console.log({ sido })

	const onSido = (el: { full_addr: string; cd: string }) => {
		console.log(el)
		setSido(prev => ({
			previousSido: { name: prev.currentSido.name, cd: prev.currentSido.cd },
			currentSido: { name: el.full_addr, cd: el.cd },
		}))
	}
	const onBackSido = () => {
		setSido(prev => ({
			previousSido: { name: undefined, cd: undefined },
			currentSido: { name: prev.previousSido.name, cd: prev.previousSido.cd },
		}))
	}
	useEffect(() => {
		refetch()
	}, [sido])
	return (
		<S.Wrapper>
			<S.Box>
				<S.Top>
					<div>모임 활동 지역</div>
					<Cancel_big_Icon />
				</S.Top>
				<button onClick={onBackSido}>{sido.previousSido.name}</button>
				<>
					{!isLoading &&
						getAddress?.result.map((el: any, idx: number) => (
							<S.List key={idx} onClick={() => onSido(el)}>
								{el.full_addr}
							</S.List>
						))}
				</>
			</S.Box>
		</S.Wrapper>
	)
}

export default SearchAddress

const Wrapper = styled.div`
	position: fixed;
	top: -3rem;
	left: 0;
	height: 200vh;
	width: 100%;
	z-index: 9999;
	background-color: rgba(0, 0, 0, 0.4);
	${FlexCenterCSS}
`

const Box = styled.div`
	width: 45rem;
	padding: 0.5rem 0;
	text-align: center;
	${FlexColumnCSS}
	align-items: center;
	border-radius: 0.5rem;
	background-color: ${({ theme }) => theme.COLOR.common.white};
	& > span {
		* {
			margin: 0 1rem;
		}
	}
	animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
	position: fixed;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 80%;
	}
	@keyframes fadeIn {
		0% {
			top: -20rem;
		}

		100% {
			top: 13%;
		}
	}
`

const Top = styled.div`
	${FlexBetweenCSS}
	width: 95%;
	margin-bottom: 0.5rem;
`
const List = styled.div`
	&:hover {
		background-color: orange;
	}
	cursor: pointer;
	text-align: start;
	padding: 0.5rem 0 0.5rem 2rem;
	width: 100%;
`
const S = { Wrapper, Box, Top, List }
