import  USERNAME from "../constants&types/types"

export default function setUserName (username) {
    return {
        type: "USERNAME",
        username
    }
}