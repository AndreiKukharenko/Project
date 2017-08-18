import React from 'react';

import { USERNAME } from "../constants.constants"

export const setUserName = (text) => {
    const action = {
        type: USERNAME,
        text
    }
    return action;
}