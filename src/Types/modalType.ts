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
	postId?: number | null
}
