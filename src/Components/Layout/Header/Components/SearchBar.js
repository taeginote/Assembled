import { CiSearch } from 'react-icons/ci'
import styled from 'styled-components'
import NotificationModal from '../../../Modal/NotificationModal'
import { useRecoilState } from 'recoil'
import { useState } from 'react'
import { modalViewNotification } from '../../../../Atoms/modalView.atom'

function SearchBar() {
	const [searchValue, setSearchValue] = useState('')
	const [recoilCounter, setRecoilCounter] = useRecoilState(
		modalViewNotification,
	)

	//Click
	const onClickSearch = () => {
		if (searchValue.trim().length === 0) return setRecoilCounter(() => true)
	}
	//Enter
	const onkeyDown = e => {
		if (e.nativeEvent.isComposing) return
		if (e.key === 'Enter') {
			e.preventDefault()
			if (e.target.value.trim().length === 0)
				return setRecoilCounter(() => true)
		}
	}

	return (
		<>
			<S.InputWrapper>
				<S.SearchInput
					onChange={e => setSearchValue(e.target.value)}
					onKeyDown={onkeyDown}
					value={searchValue}
				/>
				<S.SearchIcon size={'26'} onClick={onClickSearch} />
			</S.InputWrapper>
			{recoilCounter && <NotificationModal text={'검색어를 입력해주세요'} />}
		</>
	)
}
export default SearchBar

const SearchInput = styled.input`
	width: 40rem;
	height: 50px;
	font-size: ${({ theme }) => theme.FONT_SIZE.tiny};
	border: 0;
	border-radius: 0.5rem;
	outline: none;
	padding-left: 1rem;
	border: 2px solid ${({ theme }) => theme.COLOR.main};
`
const InputWrapper = styled.div`
	position: relative;
	@media screen and (max-width: ${({ theme }) => theme.MEDIA.mobile}) {
		display: none;
	}
`
const SearchIcon = styled(CiSearch)`
	position: absolute;
	right: 0.7rem;
	top: 1rem;
	color: ${({ theme }) => theme.COLOR.main};
	cursor: pointer;
`
const S = { SearchInput, InputWrapper, SearchIcon }
