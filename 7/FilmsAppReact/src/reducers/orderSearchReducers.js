import { ORDER_BY } from "../constantsAndTypes/types";
import { SEARCH_TITLE } from "../constantsAndTypes/types";

export const orderByReducer = (state = "", action) => {
    switch(action.type){
        case ORDER_BY:
          return action.orderBy;
        default:
          return state;
    }
}

export const searchTitleReducer = (state = "", action) => {
    switch(action.type){
        case SEARCH_TITLE:
          return action.searchTitle ;
        default:
          return state;
    }
}