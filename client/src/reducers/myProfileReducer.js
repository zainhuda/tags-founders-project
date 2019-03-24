import React from 'react';
import {FETCH_MY_PROFILE} from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_MY_PROFILE:
            //console.log("got my profile", action.payload);
            return action.payload;
        default:
            //console.log("default state:", state);
            return state;
    }
}
