import { combineReducers } from 'redux';

// import all reducers here
import parksReducer from './parksReducer';

// combine reducers
const reducers = combineReducers({
    // list all reducers here
    parks: parksReducer,
  });
  
  // make the combined reducers available for import
  export default reducers;