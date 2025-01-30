export interface IStock {
    _id: string
    name: string
    text: string
    picture: string
}

export interface StockState {
    stocks: IStock[];
    error: string;
}

export enum StockActionTypes {
    FETCH_STOCK = 'FETCH_STOCK',
    FETCH_STOCK_ERROR = 'FETCH_STOCK_ERROR',
}

interface FetchStockAction {
    type: StockActionTypes.FETCH_STOCK
    payload: IStock;
}

interface FetchStockErrorAction {
    type: StockActionTypes.FETCH_STOCK_ERROR;
    payload: string
}

export type StockAction = FetchStockAction | FetchStockErrorAction
