import { setupWorker } from 'msw'
import { handlers } from './MSWApis/handlers'

export const worker = setupWorker(...handlers)
