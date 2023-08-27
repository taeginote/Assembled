import { useQuery } from '@tanstack/react-query'

import PostApi from '../../Apis/PostApi'

export type Comments = {
	postTitle: string
	commentId: number
	contents: string
	postId: number
	userId: number
	writeDate: string
	writerNickname: string
	profile: { filePath: string } | null
}
export interface UseDetailType {
	response: {
		categoryName: string
		commentCount: number
		comments: Comments[]
		contents: string
		createdTime: string
		expectedPeriod: number
		hits: number
		likeStatus: boolean
		likes: number
		personnelNumber: number
		postId: number
		postProfileImages: []
		postStatus: 'PROGRESS' | 'COMPLETED'
		title: string
		writerId?: string
		writerNickname: string
		writerProfileImages: { filePath: string } | null
	}
	status: number
	success: boolean
}

const getDetailData = async (postId: number) => {
	const res = await PostApi.getDetail({ postId })

	return res.data
}

const useGetDetailData = (postId: number) => {
	const { data, isLoading, refetch } = useQuery<UseDetailType, boolean>(
		['useGetDetailData', postId],
		() => getDetailData(postId),
		{
			enabled: !!postId,
		},
	)

	return { data, isLoading, refetch }
}

export default useGetDetailData
