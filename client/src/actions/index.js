import axios from 'axios';
import {FETCH_PROFILES} from './types';
import {FETCH_MY_PROFILE} from './types';

export const fetchProfiles = (query) => async dispatch => {
    if (query === "") {
        const res = await axios.get('/api/profiles');
        dispatch({type: FETCH_PROFILES, payload: res.data});
    }
    else {
        const path = '/api/search/' + query;
        const res = await axios.get(path);
        console.log("in the fetchProfiels action got", res);
        dispatch({type: FETCH_PROFILES, payload: res.data});
    }
};

export const fetchMyProfile = () => async dispatch => {
    const res = await axios.get('/api/get_profile');
    console.log("in the fetchmyprofle method got", res);
    dispatch({type: FETCH_MY_PROFILE, payload: res.data});
};
