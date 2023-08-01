import { forwardRef } from 'react'
import * as S from './Input.style'

//보류
function Input({ ...rest }: any, ref: any) {
	return <S.Input ref={ref} {...rest} />
}
export default forwardRef(Input)
