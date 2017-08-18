import React from 'react';
import { createStore, combineReducers} from "redux";

import { USERNAME } from "../constants/constants";

const uName = (action)=>{
    return{
      type: action.type,
      text:action.userName
    }
}


const userInfoReducer = (state="", action) => {
    let userInfoReducer = null;
    switch(action.type){
      case USERNAME:
        userInfoReducer = [...state, uName(action) ]
      default:
       return state;
    }
}

export default userInfoReducer;