import { ORDER_BY } from "../constants&types/types";

export const orderByReducer = (state = "", action) => {
    switch(action.type){
        case ORDER_BY:
          return action.orderBy;
          break;
        default:
          return state;
    }
}