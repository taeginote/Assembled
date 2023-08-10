import { atom } from 'recoil'

export const modalViewToken = atom<boolean>({
	key: 'modalViewToken',
	default: false,
})
