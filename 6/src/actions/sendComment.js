import SEND_COMMENT from "../constants&types/types"

export default function sendComment (comment) {
    return {
        type: "SEND_COMMENT",
        comment
    }
}