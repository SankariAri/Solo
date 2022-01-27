import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
import * as actions from '../actions/actions';
import reducers from '../reducers/index.js';
import ParksDisplay from '../components/ParksDisplay.jsx';

const mapStateToProps = state => ({
 parkInfo: state.parks.parkInfo
  })


  const mapDispatchToProps = dispatch => (
   {
 fetchParkInfo: () => dispatch(actions.fetchParkInfo())
  
  });

  function ParksContainer (props) {
    const {parkInfo, fetchParkInfo} = props; 
    console.log({parkInfo})
   useEffect(() => {
     fetchParkInfo()
   }, []);



   const parkNamesArray = []
   for (let i=0; i<parkInfo.length; i++) {
    parkNamesArray.push(<ParksDisplay name= {parkInfo[i].names} image={parkInfo[i].images}  />)
   }
  
    return (
      <div className="innerbox"> 
      {parkNamesArray}
      </div>
    )
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer);