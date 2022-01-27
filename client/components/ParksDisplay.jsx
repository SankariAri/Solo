import React from 'react';

const ParksDisplay = props => {
    console.log(props)
    return (
        <div className="displayBox">
           <h3>{props.name}</h3> 

    </div>
    )
}


export default ParksDisplay;