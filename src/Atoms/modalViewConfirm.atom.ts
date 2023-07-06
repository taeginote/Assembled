import { atom } from 'recoil'

export const modalViewConfirm = atom<boolean>({
	key: 'modalViewConfirm',
	default: false,
})
