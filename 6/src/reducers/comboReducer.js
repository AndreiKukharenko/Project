import {combineReducers} from 'redux';
import {userInfoReducer} from "./userInfoReducer";
import {filmsReducer} from "./filmsReducer";
import {searchTitleReducer} from "./orderSearchReducers";
import {orderByReducer} from "./orderSearchReducers"

export default combineReducers({
    username: userInfoReducer,
    films: filmsReducer,
    searchTitle: searchTitleReducer,
    orderBy: orderByReducer
})
