import { styled } from 'styled-components'
import { FlexCenterCSS } from '../../Styles/common'
import { Back_Icon, Cancel_big_Icon } from '../../Icons/Icons'
import { FlexBetweenCSS } from '../../Styles/common'
import { FlexColumnCSS } from '../../Styles/common'
import useGetAccessTokenData from '../../Hooks/Queries/get-mapAccessToken'
import useGetSearchAddressData, {
	getSearchAddressList,
} from '../../Hooks/Queries/get-mapSearchAddress'
import { useEffect, useState } from 'react'
import CommentSkeleton from '../Skeleton/CommentSkeleton'
import SearchAddressModalSkeleton from '../Skeleton/SearchAddressModalSkeleton'

interface stateSido {
	name?: string
	cd?: string
}
interface MapModalPropType {
	setModalView: (state: boolean) => void | undefined
	setResultAddress: (state: string) => void | undefined
}
const SearchAddress = ({
	setModalView,
	setResultAddress,
}: MapModalPropType) => {
	const [sido, setSido] = useState<stateSido>({
		name: undefined,
		cd: undefined,
	})
	const loadingArr: 0[] = Array(10).fill(0)
	const { data } = useGetAccessTokenData()

	const {
		data: getAddress,
		isLoading,
		refetch,
	} = useGetSearchAddressData({
		accessToken: data?.result?.accessToken!,
		cd: sido.cd,
	})

	const onSido = (el: { full_addr: string; cd: string }) => {
		if (el.cd.length === 2) {
			setSido({ name: el.full_addr, cd: el.cd })
		} else {
			setResultAddress(el.full_addr)
			setModalView(false)
		}
	}

	const onBackSido = () => {
		setSido({ name: undefined, cd: undefined })
	}
	useEffect(() => {
		refetch()
	}, [sido])
	return (
		<S.Wrapper>
			<S.Box>
				<S.Top>
					<div>모임 활동 지역을 선택해주세요</div>
					<Cancel_big_Icon onClick={() => setModalView(false)} />
				</S.Top>
				{sido.name && (
					<S.Back onClick={onBackSido}>
						<div>
							{sido.name}
							<Back_Icon />
						</div>
					</S.Back>
				)}
				<S.ListWrap>
					{isLoading
						? loadingArr.map((el: 0, idx: number) => (
								<SearchAddressModalSkeleton key={idx} />
						  ))
						: getAddress?.result.map(
								(el: getSearchAddressList, idx: number) => (
									<S.List key={idx} onClick={() => onSido(el)}>
										{el.full_addr}
									</S.List>
								),
						  )}
				</S.ListWrap>
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
const ListWrap = styled.div`
	width: 100%;
	text-align: start;
	max-height: 40rem;
	overflow: auto;
`
const List = styled.div`
	&:hover {
		background-color: orange;
	}
	cursor: pointer;

	padding: 0.5rem 0 0.5rem 2rem;
`
const Back = styled.div`
	width: 91%;
	margin: 1rem 0;

	& > div {
		margin-right: 1rem;
		display: flex;
		align-items: center;
		& > * {
			margin-left: 1rem;
		}
	}

	&:hover {
		cursor: pointer;
	}
`
const Wait = styled.div`
	background-color: yellow;
	font-size: ${({ theme }) => theme.FONT_SIZE.xslarge};
	min-height: 40rem;
	${FlexCenterCSS}
`
const S = { Wrapper, Box, Top, List, Back, ListWrap, Wait }
