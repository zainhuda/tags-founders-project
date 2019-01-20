import axios from 'axios';

export const getProfiles = () => {
	return (dispatch, getState) => {
		// make async call to data base
		// make api call to get all the users to display

		axios.get(('http://localhost:5000/api/profiles/t25mt190a'), (res) => {
			dispatch({type: 'GET_PROFILES', res})
		})
	};
};