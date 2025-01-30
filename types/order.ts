import { CartDish } from "./dish"

export interface IOrder {
    _id: string
    adress: string
    phone_number: string
    orderIndex: number
    cart: CartDish
    delive: boolean
    createdAt: Date;
    status: 'waiting' | 'inWay' | 'complete';
    fullPrice: number;
}

export interface OrderState {
    categories: IOrder[];
    error: string;
}

export enum OrderActionTypes {
    FETCH_ORDER = 'FETCH_ORDER',
    FETCH_ORDER_ERROR = 'FETCH_ORDER_ERROR',
}

interface FetchOrderAction {
    type: OrderActionTypes.FETCH_ORDER
    payload: IOrder;
}

interface FetchOrderErrorAction {
    type: OrderActionTypes.FETCH_ORDER_ERROR;
    payload: string
}

export type OrderAction = FetchOrderAction | FetchOrderErrorAction
