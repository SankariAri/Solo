import React, { Component } from 'react';
import { connect } from 'react-redux';
import ParksContainer from './ParksContainer.jsx';


function MainContainer () {
   return (
    <div className="container">
    <div className="outerBox">
    <h1 id="header">National Parks Guide</h1>
      <ParksContainer> </ParksContainer>
    </div>    
    </div>
   );
  };


export default MainContainer;