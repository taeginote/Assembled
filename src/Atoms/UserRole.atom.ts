import { atom } from 'recoil'
import UserStatusService from '../Utils/UserStatusService'

export const userRole = atom<string | null>({
	key: 'userRole',
	default: UserStatusService.getUserStatus() || undefined,
})
