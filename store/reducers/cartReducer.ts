import { CartActionType, CartStateAction, CartStateState } from "@/types/cartStateType";
import { SizeAction, SizeActionType, SizeState } from "../../types/size"


const initialState: CartStateState  = {
    isAddCart: 0
}

export const cartReducer = (state = initialState, action: CartStateAction): CartStateState => {
    switch (action.type) {
        case CartActionType.SET_COUNTER:
            return {...state, isAddCart: action.payload}
        default:
            return state;
    }
}