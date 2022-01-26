import * as types from '../constants/actionTypes';
import ParkCreator from '../components/ParkCreator.jsx';

const initialState = {
    parks: [],
}

const parkReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            console.log(action.payload)
            return {...state}
    }
    
}

export default parkReducer;