import {ORDER_BY} from "../constants&types/types"

export default function orderBy (orderBy) {
    return {
        type: ORDER_BY,
        orderBy
    }
}