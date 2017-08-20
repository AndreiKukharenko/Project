import React from 'react';
import { createStore, combineReducers} from "redux";

import { USERNAME } from "../constants/constants";

const userInfoReducer = (state = "", action) => {
    switch(action.type){
      case "USERNAME":
        return action.username;
        break;
      default:
       return state;
    }
}

export default userInfoReducer;