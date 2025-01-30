import { UserAction, UserActionTypes, UserState } from "@/types/user"


const initialState: UserState  = {
    users: [],
    error: ''
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_ERROR:
            return {...state, error: action.payload}
        case UserActionTypes.FETCH_USER:
            // @ts-ignore
            return {error: '', users: action.payload}
        default:
            return state;
    }
}