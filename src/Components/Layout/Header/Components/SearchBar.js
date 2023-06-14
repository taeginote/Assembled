import { CiSearch } from 'react-icons/ci'
import styled from 'styled-components'

function SearchBar() {
	return (
		<S.InputWrapper>
			<S.SearchInput />
			<S.SearchIcon size={'26'} />
		</S.InputWrapper>
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
`
const SearchIcon = styled(CiSearch)`
	position: absolute;
	right: 0.7rem;
	top: 1rem;
	color: ${({ theme }) => theme.COLOR.main};
	cursor: pointer;
`
const S = { SearchInput, InputWrapper, SearchIcon }
