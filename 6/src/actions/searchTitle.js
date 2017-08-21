import SEARCH_TITLE from "../constants&types/types"

export default function searchTitle (searchTitle) {
    return {
        type: "SEARCH_TITLE",
        searchTitle
    }
}