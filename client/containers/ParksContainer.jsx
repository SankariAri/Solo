import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import * as actions from '../actions/actions';
import reducers from '../reducers/index.js';
import ParksDisplay from '../components/ParksDisplay.jsx';

const mapStateToProps = state => ({
 parkNames: state.parks.parkNames
  })


  const mapDispatchToProps = dispatch => (
   {
 fetchParkInfo: () => dispatch(actions.fetchParkInfo())
  
  });

  function ParksContainer (props) {
    const {parkNames, fetchParkInfo} = props; 
   useEffect(() => {
     fetchParkInfo()
   }, []);

   // create empty array for park names to pass into display 

   const parkNamesArray = []
   for (let i=0; i<parkNames.length; i++) {
    parkNamesArray.push(<ParksDisplay name={parkNames[i]}/>)
   }
  
    return (
      <div className="innerbox"> 
      {parkNamesArray}
      </div>
    )
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer);