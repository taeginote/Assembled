import { useQuery } from '@tanstack/react-query'
import ActivityApi from '../../Apis/ActivityApi'

interface Content {
	host: boolean
	meetingId: number
	nickname: string
	profile: any
	userId: number
}
interface ActivityUserType {
	response: Content[]
}

const getActivityUserData = async (meetingId: number) => {
	const res = await ActivityApi.getActivityUser(meetingId)
	return res.data
}

const useGetActivityUserData = (meetingId: number) => {
	const { data, isLoading, refetch } = useQuery<ActivityUserType, boolean>(
		['useGetActivityUserData', meetingId],
		() => getActivityUserData(meetingId),
	)

	return { data, isLoading, refetch }
}

export default useGetActivityUserData
