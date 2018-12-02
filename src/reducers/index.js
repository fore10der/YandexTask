import { combineReducers } from 'redux';
import TimetablesReducer from './timetablesReducer'
import searchReducer from './filterReducer'
import serviceReducer from './serviceReducer'

export default combineReducers({
    timetables: TimetablesReducer,
    filter: searchReducer,
    service: serviceReducer
})