import { USERNAME } from "../constantsAndTypes/types";

export const userInfoReducer = (state = "", action) => {
    switch(action.type){
        case USERNAME:
          return action.username;
          break;
        default:
          return state;
    }
}