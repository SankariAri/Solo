import * as types from '../constants/actionTypes';

const initialState = {
    parkNames: [],
}

const parkReducer = (state = initialState, action) => { 
    const copyState = {...state};
    let newParkNames =[];
    switch (action.type) {
        case types.PARK_INFO:
            console.log('----->',action.type, action.payload)
    for (let i=0; i<action.payload.parkData.data.length; i++) {
        console.log('---->',action.payload.parkData.data[i])
        newParkNames.push(action.payload.parkData.data[i].fullName) 
        // const = park{name:image:}
    }
    console.log({newParkNames})
           
    // return updated state 
    return {
        ...copyState, 
        parkNames: newParkNames,
    }
    
   default: {
      return state;
   }
}

    }

export default parkReducer;