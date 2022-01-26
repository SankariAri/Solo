import React from 'react';

const ParksDisplay = props => {
    return (
        <div className="displayBox">
        <h4>Select a National Park!</h4>
        <h4>Park: <input type = "text"></input> 
        <button type ="button" > Submit</button></h4>
    </div>
    )
}

export default ParksDisplay;