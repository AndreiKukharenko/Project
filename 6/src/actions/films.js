import {FILMS} from "../constantsAndTypes/types"

export default function orderBy (orderBy) {
    return {
        type: FILMS,
        orderBy
    }
}