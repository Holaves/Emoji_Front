import { StockAction, StockActionTypes, StockState } from "@/types/stock"


const initialState: StockState  = {
    stocks: [],
    error: ''
}

export const stockReducer = (state = initialState, action: StockAction): StockState => {
    switch (action.type) {
        case StockActionTypes.FETCH_STOCK_ERROR:
            return {...state, error: action.payload}
        case StockActionTypes.FETCH_STOCK:
            // @ts-ignore
            return {error: '', stocks: action.payload}
        default:
            return state;
    }
}