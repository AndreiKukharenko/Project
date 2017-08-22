import SEND_COMMENT from "../constantsAndTypes/types";

export default function sendComment (films, id, username, comment) {
    return {
        type: "SEND_COMMENT",
        films: films,
        newComment: {
            id: id,
            username: username,
            text: comment
        }
    }
}