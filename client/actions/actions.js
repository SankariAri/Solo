// import actionType constants
import * as types from '../constants/actionTypes';


// Render specific park information on park component ------------
export const parkInfo = (parkData) => ({
  type: types.PARK_INFO,
  payload: parkData
});
// Fetch request for specific park information
export const fetchParkInfo = parkCode => {
  return (dispatch) => {
      return fetch.get('https://developer.nps.gov/api/v1/parks', parkCode)
          .then((parkData) => {
              dispatch(parkInfo(parkData.data))
          })
  }
}