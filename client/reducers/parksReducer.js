import * as types from '../constants/actionTypes';
import ParkCreator from '../components/ParkCreator.jsx';

const initialState = {
    parks: [],
}

// const urls = [];
// for (let i=0; i<this.state.urls.length; i++) {
//     urls.push(<FeedItem url={this.state.urls[i]}/>)
// }

const parkReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            console.log('----->',action.type, action.payload)
            return {...state}
    }
    
}

export default parkReducer;