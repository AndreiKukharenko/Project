import {FILMS} from "../constantsAndTypes/types"

export default function changeFilms (films) {
    return {
        type: FILMS,
        films
    }
}