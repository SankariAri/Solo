import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParksContainer from './ParksContainer.jsx';


function MainContainer () {
   return (
    <div className="container">
    <div className="outerBox">
      <ParksContainer> </ParksContainer>
    </div>    
    </div>
   );
  };


export default MainContainer;