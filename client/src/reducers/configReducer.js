import React from 'react';
import {FETCH_CONFIG} from '../actions/types';

const defaultState = {
    labels: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_CONFIG:
            console.log("got config file", action.payload);
            return action.payload;
        default:
            //console.log("default state:", state);
            return state;
    }
}
