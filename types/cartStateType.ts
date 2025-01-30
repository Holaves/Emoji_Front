export interface ICartState {
    isAddCart: number;
}

export interface CartStateState extends ICartState {
}

export enum CartActionType {
    SET_COUNTER = 'SET_COUNTER',
}

interface SetCounter {
    type: CartActionType.SET_COUNTER;
    payload: number;
}


export type CartStateAction = SetCounter