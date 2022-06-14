import { REGISTER_USER } from '../_actions/types'

function reducer(state = {}, action: any) {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, loginSuccess: action.payload }
        default:
            return state
    }
}
export default reducer
