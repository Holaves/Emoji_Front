export interface ICategoria {
    _id: string
    name: string
    subName: string
    text: number
    picture: string
}

export interface CategoriaState {
    categories: ICategoria[];
    error: string;
}

export enum CategoriaActionTypes {
    FETCH_CATEGORIA = 'FETCH_CATEGORIA',
    FETCH_CATEGORIA_ERROR = 'FETCH_CATEGORIA_ERROR',
}

interface FetchCategoriaAction {
    type: CategoriaActionTypes.FETCH_CATEGORIA
    payload: ICategoria;
}

interface FetchCategoriaErrorAction {
    type: CategoriaActionTypes.FETCH_CATEGORIA_ERROR;
    payload: string
}

export type CategoriaAction = FetchCategoriaAction | FetchCategoriaErrorAction
