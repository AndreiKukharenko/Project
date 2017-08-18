import React from 'react';
import { createStore, combineReducers} from "redux";

import { USERNAME } from "../constants/constants";

const userInfoReducer = (state={}, action) => {
    let userInfoReducer = null;
    switch(action.type){
      case USERNAME:
      userInfoReducer = [...state, ]
    }
    return state;
}

export default userInfoReducer;