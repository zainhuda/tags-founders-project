import React from 'react';

export default (state = {} , action) => {
	switch (action.type) {
        case 'GET_PROFILES':
            console.log("got data", action.res);
        break;
        default:
			return state;
	}
}