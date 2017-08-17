import { combineReducers } from 'redux';
import userInfoReducer from "./userInfoReducer";

const combinedReducer = combineReducers({
    userInfoReducer,
    //todos
})

export default combinedReducer;