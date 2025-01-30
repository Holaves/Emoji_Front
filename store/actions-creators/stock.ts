import { AppURL } from "@/layouts/MainLayout"
import { StockAction, StockActionTypes } from "@/types/stock"
import axios from "axios"
import { Dispatch } from "redux"


export const fetchStocks = () => {
    return async (dispatch: Dispatch<StockAction>) => {
        try {
            const response = await axios.get(`${AppURL}/ads/`)
            dispatch({ type: StockActionTypes.FETCH_STOCK, payload: response.data });
        } catch (e) {
            dispatch({
                type: StockActionTypes.FETCH_STOCK_ERROR,
                payload: 'Произошла ошибка при загрузке акций',
            })
        }
    }
}
