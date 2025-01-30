

export interface IDish {
    _id: number
    name: string
    price: number
    picture: string
    weight: number
    categoria: string
    description: string
}

export interface DishObject {
    dish: IDish,
    quantity: number
}

export interface CartDish {
    dishes: DishObject[];
    isDelive: boolean;
}

export enum DishActionTypes {
    FETCH_DISH = 'FETCH_DISH',
    FETCH_DISH_ERROR = 'FETCH_DISH_ERROR',
}

interface FetchDishAction {
    type: DishActionTypes.FETCH_DISH;
    payload: IDish;
}

interface FetchDishErrorAction {
    type: DishActionTypes.FETCH_DISH_ERROR;
    payload: string
}

export type DishAction = FetchDishAction | FetchDishErrorAction
