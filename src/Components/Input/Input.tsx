import { forwardRef } from 'react'
import * as S from './Input.style'

function Input({ ...rest }, ref: any) {
	return <S.Input ref={ref} {...rest} />
}
export default forwardRef(Input)
