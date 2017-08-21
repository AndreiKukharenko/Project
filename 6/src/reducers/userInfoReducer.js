import { USERNAME } from "../constants&types/types";

const userInfoReducer = (state = "", action) => {
    switch(action.type){
        case USERNAME:
          return action.username;
          break;
        default:
          return state;
    }
}

export default userInfoReducer;