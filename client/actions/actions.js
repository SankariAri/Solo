// import actionType constants
import * as types from '../constants/actionTypes';
import axios from 'axios'; 
const npKey = 'vfrVt0yYfk3jOivsrozPJQ8eSB9ZQ23iiv9eWYZf'; 


// Render specific park information on park component ------------
export const parkInfo = (parkData) => ({
  type: types.PARK_INFO,
  payload: {parkData}
});


// Fetch request for specific park information
export const fetchParkInfo = () => {
  return (dispatch) => {
       axios.get('https://developer.nps.gov/api/v1/parks', {
        params: {
        api_key: npKey
        }
      })
          .then((parkData) => {
            console.log({parkData})
              dispatch(parkInfo(parkData.data))
          })
  }
}