import SEND_COMMENT from "../constants&types/types";
import update from 'immutability-helper';

export default function sendComment (id, username, comment) {
    return {
        type: "SEND_COMMENT",
        comment: comment,
        
        // newComment: {
        // id: id,
        // username: username,
        // comment: comment
        // }
    }
}