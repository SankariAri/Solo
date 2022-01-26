// import actionType constants
import * as types from '../constants/actionTypes';

export const addParkActionCreator = currentPark => {
    const newObj = {};
    newObj.type = types.ADD_PARK;
    newObj.payload = currentPark;
    return newObj;
  };