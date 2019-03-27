import axios from 'axios';
import {FETCH_PROFILES, FETCH_MY_PROFILE, FETCH_LABELS} from './types';


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

export const fetchLabels = () => {
    // no api created yet, lets just mimic it
    const data = {
        all: [],
        portfolios: [
            {label: "Operations", sort: "Operations"},
            {label: "Finance", sort: "Finance"},
            {label: "Marketing", sort: "Marketing"},
            {label: "Industry", sort: "industry"},
            {label: "Projects", sort: "Projects"},
            {label: "Design", sort: "design"},
            {label: "Community", sort: "community"},
            {label: "Education", sort: "education"},
            {label: "Publishing", sort: "publishing"},
            {label: "Future View", sort: "future view"},
        ],
        majors: [
            {label: "Computer Science", sort: ""},
            {label: "Engineering", sort: ""},
            {label: "Math", sort: ""},
            {label: "Med Sci", sort: ""}
        ]
    }
    return({type: FETCH_LABELS, payload: data});
}
