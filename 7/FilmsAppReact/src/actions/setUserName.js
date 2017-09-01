import {USERNAME} from "../constantsAndTypes/types"

export default function setUserName (username) {
    return {
        type: USERNAME,
        username
    }
}