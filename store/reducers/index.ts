import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { sizeReducer } from "./sizeReducer";
import { userReducer } from "./userReducer";
import { stockReducer } from "./stockReducer";
import { categoriaReducer } from "./categoriaReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
    size: sizeReducer,
    user: userReducer,
    stock: stockReducer,
    categoria: categoriaReducer,
    cart: cartReducer
})

//@ts-ignore
export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      };
      if (state.count) nextState.count = state.count; // preserve count value on client side navigation
      return nextState;
    } else {
    //@ts-ignore
      return rootReducer(state, action);
    }
  };

export type RootState = ReturnType<typeof rootReducer>