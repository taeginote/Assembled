import styled from 'styled-components'
import {
	ColumnNumberCSS,
	FlexColumnCSS,
	GridCenterCSS,
	TopPadding,
	WidthAutoCSS,
} from '../../Styles/common'
import SelectBox from './Components/SelectBox/SelectBox'
import { selectDataTeamMember } from '../Register/Components/SelectBox/SelectData'
import { selectDataCategory } from '../Register/Components/SelectBox/SelectData'
import { selectDataPeriod } from '../Register/Components/SelectBox/SelectData'
import Button from '../../Components/Button/Button'

function Register() {
	return (
		<S.Wrapper>
			<S.Title>여러분이 원하는 모임 혹은 동아리를 만드세요</S.Title>
			<S.Container>
				<S.Box>
					<div>카테고리 *</div>
					<SelectBox Data={selectDataCategory} />
				</S.Box>
				<S.Box>
					<div>인원 수 *</div>
					<SelectBox Data={selectDataTeamMember} />
				</S.Box>
				<S.Box>
					<div>총 진행 예정 달 *</div>
					<SelectBox Data={selectDataPeriod} />
				</S.Box>
			</S.Container>
			<div>제목 *</div>
			<input placeholder="제목을 입력해 주세요" />
			<div>모임에 대한 설명 *</div>
			<textarea placeholder="설명을 입력해 주세요" />
			<span>
				<Button size={'normal'}>확인</Button>
				<Button size={'normal'} variant={'default-white'}>
					취소
				</Button>
			</span>
		</S.Wrapper>
	)
}
export default Register

const Wrapper = styled.div`
	${TopPadding}
	${WidthAutoCSS}
	${FlexColumnCSS}
	padding-top: 17rem;

	& > input {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		margin-bottom: 2rem;
		padding: 1.3rem 1rem;
		border-radius: 0.5rem;
		border: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};

		:focus {
			border: 1px solid ${({ theme }) => theme.COLOR.sub};
		}
	}
	& > textarea {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		outline: none;
		padding: 1.3rem 1rem;
		border: 1px solid ${({ theme }) => theme.COLOR.common.gray[400]};
		border-radius: 0.5rem;
		min-height: 17rem;
		resize: none;
		:focus {
			border: 1.5px solid ${({ theme }) => theme.COLOR.sub};
		}
	}
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		margin-top: 3rem;
		margin-bottom: 0.5rem;
	}
	& > span {
		text-align: end;
		margin-top: 3rem;
		* {
			margin-left: 1rem;
		}
	}
`
const Container = styled.div`
	${GridCenterCSS}
	${ColumnNumberCSS(2)}
`
const Title = styled.h3`
	margin-bottom: 3rem;
`
const Box = styled.div`
	width: 100%;
	& > div {
		font-size: ${({ theme }) => theme.FONT_SIZE.small};
		margin-bottom: 1rem;
	}
`

const S = { Container, Wrapper, Title, Box }
