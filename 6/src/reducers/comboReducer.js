import {combineReducers} from 'redux';
import {userInfoReducer} from "./userInfoReducer";
import {filmsReducer} from "./filmsReducer";
import {searchTitleReducer} from "./searchTitleReducer";
import {sendCommentReducer} from "./sendCommentReducer"

export default combineReducers({
    username: userInfoReducer,
    films: filmsReducer,
    searchTitle: searchTitleReducer,
    sendComment: sendCommentReducer
})
