import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParkCreator from '../components/ParkCreator.jsx';
import ParksDisplay from '../components/ParksDisplay.jsx';
import * as actions from '../actions/actions';



const mapStateToProps = state => {
    const newObj = {};
    return newObj;
  };


  const mapDispatchToProps = dispatch => {
    const newObj = {};
    return newObj;
  };

  function ParksContainer () {
    return (
      <div className="innerbox"> 
      <ParksDisplay/>
      </div>
    )
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer);