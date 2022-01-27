import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParkCreator from '../components/ParkCreator.jsx';
import ParksDisplay from '../components/ParksDisplay.jsx';
import * as actions from '../actions/actions';
import reducers from '../reducers/index.js';

const mapStateToProps = state => {
    let newObj = {};
    return newObj;
  };


  const mapDispatchToProps = dispatch => (
   {
 fetchParkInfo: () => dispatch(actions.fetchParkInfo())
  
  });

  function ParksContainer ({fetchParkInfo}) {
    fetchParkInfo()
    return (
      <div className="innerbox"> 
      <ParksDisplay/>
      </div>
    )
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer);