import { GroupJoinStatusModalProps } from '../Pages/MyPage/Pages/Wrote'

//모달에서 props 두개
export interface modalTypeTwoProps {
	text?: string
	url?: string
	setState: (state: boolean) => void | undefined
}

//모달에서 props 한개
export interface modalTypeFourProps {
	text: string
	url?: string
	mutate?: any //보류
	meetingId?: number | null
}
export interface GroupJoinModalTypeProps {
	setState: (state: GroupJoinStatusModalProps) => void | undefined
	groupJoinStatusModal: GroupJoinStatusModalProps
}
