import { IDish } from "./dish";

export interface ISet{
    name: string;
    price: number;
    picture: string;
    dishes: IDish;
    weight: number;
    description: string;
}

export enum SetActionTypes {
    FETCH_SET = 'FETCH_SET',
    FETCH_SET_ERROR = 'FETCH_SET_ERROR',
}

interface FetchSetAction {
    type: SetActionTypes.FETCH_SET;
    payload: ISet;
}

interface FetchSetErrorAction {
    type: SetActionTypes.FETCH_SET_ERROR;
    payload: string
}

export type SetAction = FetchSetAction | FetchSetErrorAction
