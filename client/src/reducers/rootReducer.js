import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profilesReducer from './profilesReducer';
import myProfileReducer from './myProfileReducer';
import labelsReducer from './labelsReducer';
export default combineReducers({
	auth: authReducer,
	profiles: profilesReducer,
	myProfile: myProfileReducer,
	labels: labelsReducer
});
