import { AppURL } from "@/layouts/MainLayout"
import { UserAction, UserActionTypes } from "@/types/user"
import axios from "axios"
import { Dispatch } from "redux"


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await axios.get(`${AppURL}/tracks`)
            dispatch({
                type: UserActionTypes.FETCH_USER,
                payload: response.data,
            })
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USER_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей',
            })
        }
    }
}
