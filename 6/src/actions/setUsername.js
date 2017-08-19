import React from 'react';

import  USERNAME from "../constants/constants"

export default function setUserName (username) {
    return {
        type: "USERNAME",
        username
    }
}