import {ADD_COMMENT} from "../constantsAndTypes/types"

export default function addComment (comment, filmId) {
    return {
        type: ADD_COMMENT,
        comment,
        filmId
    }
}