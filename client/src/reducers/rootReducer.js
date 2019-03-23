import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profilesReducer from './profilesReducer';

export default combineReducers({
	auth: authReducer,
	profiles: profilesReducer,
});
