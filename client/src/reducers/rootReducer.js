import { combineReducers } from 'redux';
import authReducer from './authReducer';
import profilesReducer from './profilesReducer';
import myProfileReducer from './myProfileReducer';
import labelsReducer from './labelsReducer';
import configReducer from './configReducer';
export default combineReducers({
	auth: authReducer,
	profiles: profilesReducer,
	myProfile: myProfileReducer,
	labels: labelsReducer,
	config: configReducer
});
