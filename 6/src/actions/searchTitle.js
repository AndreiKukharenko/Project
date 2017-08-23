import {SEARCH_TITLE} from "../constantsAndTypes/types"

export default function searchTitle (searchTitle) {
    return {
        type: SEARCH_TITLE,
        searchTitle
    }
}