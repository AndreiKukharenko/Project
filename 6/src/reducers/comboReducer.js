import {combineReducers} from 'redux';
import {userInfoReducer} from "./userInfoReducer";
import {filmsReducer} from "./filmsReducer";
import {searchTitleReducer} from "./searchTitleReducer";

export default combineReducers({
    username: userInfoReducer,
    films: filmsReducer,
    searchTitle: searchTitleReducer

})
