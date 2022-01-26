import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js'

function Park () {
    return (
        <div className="parkBox"> <br/>

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Park);