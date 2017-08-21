import { SEARCH_TITLE } from "../constants&types/types";

export const searchTitleReducer = (state = "", action) => {
    switch(action.type){
        case SEARCH_TITLE:
          return action.searchTitle ;
          break;
        default:
          return state;
    }
}