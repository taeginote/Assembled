import { PostRegisterData } from '../Types/apiType'
import axiosInstance from './@core'

//등록 관련 Apis
const RegisterApi = {
	Register(data: PostRegisterData) {
		const {
			categoryId,
			contents,
			expectedPeriod,
			personnelNumber,
			title,
			writer, //userId를 의미함
		} = data
		return axiosInstance.post(
			'/assemble/post' +
				`?categoryId=${1}&contents=${contents}&expectedPeriod=${3}&personnelNumber=${3}&title=${title}&writer=${1}`,
		)
	},
}

export default RegisterApi
