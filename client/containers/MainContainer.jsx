import React, { Component } from 'react';
import { connect } from 'react-redux';


function MainContainer () {
   return (
    <div className="container">
    <div className="outerBox">
    </div>    
    </div>
   );
  };


export default connect(mapStateToProps, null)(MainContainer);