import { SEARCH_TITLE } from "../constantsAndTypes/types";

export const searchTitleReducer = (state = "", action) => {
    switch(action.type){
        case SEARCH_TITLE:
          return action.searchTitle ;
          break;
        default:
          return state;
    }
}