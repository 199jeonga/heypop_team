import { REGISTER_USER } from './types'
import { request } from '../utils/axios'

const USER_URL = 'profile/users'
export function registerUser(dataToSubmit: any): any {
    const data = request('post', `${USER_URL}/register`, dataToSubmit)

    return {
        type: REGISTER_USER,
        payload: data,
    }
}
