import {combineReducers} from 'redux';
import {userInfoReducer} from "./userInfoReducer";
import {filmsReducer} from "./filmsReducer";

export default combineReducers({
    username: userInfoReducer,
    films: filmsReducer,
})
