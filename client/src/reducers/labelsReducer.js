import React from 'react';
import {FETCH_LABELS} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_LABELS:
            //console.log("got my profile", action.payload);
            return action.payload;
        default:
            //console.log("default state:", state);
            return state;
    }
}
