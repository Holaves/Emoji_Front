import { AppURL } from "@/layouts/MainLayout"
import { CategoriaAction, CategoriaActionTypes } from "@/types/categoria"
import axios from "axios"
import { Dispatch } from "redux"


export const fetchCategories = () => {
    return async (dispatch: Dispatch<CategoriaAction>) => {
        try {
            const response = await axios.get(`${AppURL}/categories/`)
            dispatch({ type: CategoriaActionTypes.FETCH_CATEGORIA, payload: response.data });
        } catch (e) {
            dispatch({
                type: CategoriaActionTypes.FETCH_CATEGORIA_ERROR,
                payload: 'Произошла ошибка при загрузке акций',
            })
        }
    }
}
