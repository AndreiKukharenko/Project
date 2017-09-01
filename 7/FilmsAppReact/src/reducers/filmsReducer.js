import {FILMS} from "../constantsAndTypes/types";
import {ADD_COMMENT} from "../constantsAndTypes/types";

export const filmsReducer = (state = {}, action) => {
    switch(action.type){
      case FILMS:
        return action.films;
        case ADD_COMMENT: 
        return addComment(state, action);
      default:
       return state;
    }
}

function addComment(films, action){
    let comment = action.comment;
    var currentFilm = films[action.filmId];
    var updatedFilm = {...currentFilm, ...{comments: currentFilm.comments.concat(comment)}};
    films[action.filmId] = updatedFilm;
    return [...films]
}