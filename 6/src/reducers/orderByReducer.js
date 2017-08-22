import { ORDER_BY } from "../constantsAndTypes/types";

export const orderByReducer = (state = "", action) => {
    switch(action.type){
        case ORDER_BY:
          return action.orderBy;
          break;
        default:
          return state;
    }
}