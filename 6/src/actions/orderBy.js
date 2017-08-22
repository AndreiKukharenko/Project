import {ORDER_BY} from "../constantsAndTypes/types"

export default function orderBy (orderBy) {
    return {
        type: ORDER_BY,
        orderBy
    }
}