import { SEARCH_TITLE } from "../constants&types/types";

const searchTitleReducer = (state = "", action) => {
    switch(action.type){
        case SEARCH_TITLE:
          return action.searchTitle ;
          break;
        default:
          return state;
    }
}

export default searchTitleReducer;