import { CiSearch } from 'react-icons/ci'
import styled from 'styled-components'

import { useState } from 'react'
import { modalViewNotification } from '../../../../Atoms/modalView.atom'
import { useRecoilState } from 'recoil'
import NotificationModal from '../../../../Components/Modal/NotificationModal'
import { EventTargetType, SearchType } from '../../../../Types/type'
import { FlexBetweenCSS } from '../../../../Styles/common'
import { DownIcon } from '../../../../Icons/Icons'

function SearchBar({
	searchValue,
	setSearchValue,
	setSelectVal,
	selectVal,
}: SearchType) {
	const Data = [
		{ title: '제목', value: 'title' },
		{ title: '내용', value: 'contents' },
	]

	const [isView, setIsView] = useState(false)
	const [recoilCounter, setRecoilCounter] = useRecoilState<boolean>(
		modalViewNotification,
	)

	const onClickSearch = (e: any) => {
		e.preventDefault()
		// if (e.target.text.value.trim().length === 0)
		// 	return setRecoilCounter(() => true)
		setSearchValue(e.target.text.value)
	}

	//Enter
	const onkeyDown = (e: EventTargetType) => {
		if (e.nativeEvent.isComposing) return
		if (e.key === 'Enter') {
			e.preventDefault()
			// if (e.target.value.trim().length === 0)
			// 	return setRecoilCounter(() => true)
			setSearchValue(e.target.value)
		}
	}

	return (
		<>
			<S.InputWrapper onSubmit={onClickSearch}>
				<S.Wrapper onClick={() => setIsView(!isView)}>
					<S.Title isView={isView}>
						<div>{selectVal.title}</div>
						<span>
							<DownIcon />
						</span>
					</S.Title>
					{isView && (
						<S.Box>
							{Data.map((data, idx) => (
								<S.List key={idx} onClick={() => setSelectVal(data)}>
									{data.title}
								</S.List>
							))}
						</S.Box>
					)}
				</S.Wrapper>
				<S.SearchInput name="text" onKeyDown={onkeyDown} />
				<button>
					<S.SearchIcon size={'26'} />
				</button>
			</S.InputWrapper>
			{recoilCounter && <NotificationModal text={'검색어를 입력해주세요'} />}
		</>
	)
}
export default SearchBar

const SearchInput = styled.input`
	border: none;
	border-radius: 0.7rem;
	width: 20rem;
	font-size: ${({ theme }) => theme.FONT_SIZE.xs};
	padding-left: 1rem;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		width: 13rem;
	}
`
const InputWrapper = styled.form`
	position: relative;

	display: flex;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.COLOR.main};
	border-radius: 0.7rem;
`
const SearchIcon = styled(CiSearch)`
	position: absolute;
	right: 0.7rem;
	top: 0.6rem;
	color: ${({ theme }) => theme.COLOR.main};
	cursor: pointer;
`

const Wrapper = styled.div`
	width: 9rem;
	height: 4rem;
	padding-left: 1rem;
	margin-bottom: -0.2rem;
	position: relative;
	font-size: ${({ theme }) => theme.FONT_SIZE.small};
`
const Title = styled.div<{ isView: boolean }>`
	${FlexBetweenCSS}
	margin-bottom: 0.1rem;
	& > div {
		color: ${({ theme }) => theme.COLOR.common.gray[200]};
		margin-left: 0.3rem;
	}
	& > span {
		transform: ${({ isView }) => isView && 'rotate(180deg)'};
		transition: all linear 0.2s;
		margin: 0.5rem 0.5rem 0 0;
	}
`
const Box = styled.ul`
	position: absolute;
	background-color: white;
	width: 100%;
	z-index: 100000;
	right: 0;
	background-color: transparent;
	background-color: ${({ theme }) => theme.COLOR.orange};
	border-radius: 0 0 0.5rem 0.5rem;
`
const List = styled.li`
	padding-left: 1.3rem;
	margin-bottom: 0.7rem;
	&:hover {
		background-color: ${({ theme }) => theme.COLOR.sub};
		transition: all linear 0.3s;
	}
`
const S = { SearchInput, InputWrapper, SearchIcon, Wrapper, Title, Box, List }
