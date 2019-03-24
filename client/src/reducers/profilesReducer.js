import React from 'react';
import {FETCH_PROFILES} from '../actions/types';

export default (state = [] , action) => {
	switch (action.type) {
        case FETCH_PROFILES:
            console.log("got profiles", action.payload);
			return action.payload;
		default:
			return state;
	}
}
