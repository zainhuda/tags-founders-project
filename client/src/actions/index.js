import axios from 'axios';
import {FETCH_PROFILES} from './types';

export const fetchProfiles = (query) => async dispatch => {
    if (query === "") {
        const res = await axios.get('/api/profiles');
        dispatch({type: FETCH_PROFILES, payload: res.data});
    }
    else {
        const path = '/api/search/' + query;
        const res = await axios.get(path);
        console.log("in the fetchProfiels action got", res);
        dispatch({type: FETCH_PROFILES, payload: res.data})
    }


};
