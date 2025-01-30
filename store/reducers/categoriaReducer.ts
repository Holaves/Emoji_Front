import { CategoriaAction, CategoriaActionTypes, CategoriaState } from "@/types/categoria"
import { StockAction, StockActionTypes, StockState } from "@/types/stock"


const initialState: CategoriaState  = {
    categories: [],
    error: ''
}

export const categoriaReducer = (state = initialState, action: CategoriaAction): CategoriaState => {
    switch (action.type) {
        case CategoriaActionTypes.FETCH_CATEGORIA_ERROR:
            return {...state, error: action.payload}
        case CategoriaActionTypes.FETCH_CATEGORIA:
            // @ts-ignore
            return {error: '', categories: action.payload}
        default:
            return state;
    }
}