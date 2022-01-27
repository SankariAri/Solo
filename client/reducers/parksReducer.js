import * as types from '../constants/actionTypes';

const initialState = {
    parkInfo: [],
}

const parkReducer = (state = initialState, action) => { 
    const copyState = {...state};
    let newParkInfo = [];

    switch (action.type) {
        case types.PARK_INFO:
            // console.log('----->',action.type, action.payload)
    for (let i=0; i<action.payload.parkData.data.length; i++) {
        const parkObj = {}; 
        parkObj.names = action.payload.parkData.data[i].fullName;
        parkObj.images = action.payload.parkData.data[i].images[0].url;
        newParkInfo.push(parkObj);
        console.log( '--->',newParkInfo)
       
    }
           
    // return updated state 
    return {
        ...copyState, 
        parkInfo: newParkInfo,
    }
    
   default: {
      return state;
   }
}

    }

export default parkReducer;

//

// return updated state 
// return {
//     ...copyState, 
//     parkNames: newParkNames,
// }
//newParkImages.push(action.payload.parkData.data[i].images[0].url)  