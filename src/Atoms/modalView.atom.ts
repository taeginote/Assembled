import { atom } from 'recoil'

export const modalViewNotification = atom<boolean>({
	key: 'modalViewNotification',
	default: false,
})
