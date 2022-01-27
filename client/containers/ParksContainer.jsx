import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParkCreator from '../components/ParkCreator.jsx';
import ParksDisplay from '../components/ParksDisplay.jsx';
import * as actions from '../actions/actions';
import reducers from '../reducers/index.js';

const mapStateToProps = state => ({
 parkNames: state.parks.parkNames
  })


  const mapDispatchToProps = dispatch => (
   {
 fetchParkInfo: () => dispatch(actions.fetchParkInfo())
  
  });

  function ParksContainer (props) {
    const {parkNames, fetchParkInfo} = props;
   // look up useEffect 
    fetchParkInfo()
    console.log('inside of ParksContainer: ', {props})
    return (
      <div className="innerbox"> 
      {parkNames}
      <ParksDisplay/>
      </div>
    )
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer);