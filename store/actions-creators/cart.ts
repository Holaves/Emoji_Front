import { CartActionType, CartStateAction } from "@/types/cartStateType";

export const setCartCounter = (payload: number): CartStateAction => {
    return  {type: CartActionType.SET_COUNTER, payload}
}