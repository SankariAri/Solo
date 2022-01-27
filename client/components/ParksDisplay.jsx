import React from 'react';
import { useSpring, animated } from 'react-spring';

const ParksDisplay = props => {
    console.log(props)
    const spring = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
    return (
        <div className="displayBox"> 
        <h2>{props.name}</h2> 
        <img src={props.image}/> 
        <h4>Add a Hike: <input type = "text"></input> 
        <button type ="button" onClick = {() => clicked(props)}> Add </button></h4>
        <textarea cols="30" rows="5"> Add Park Notes Here </textarea> 
        <div> <button type ="button" onClick = {() => clicked(props)}> Submit </button> </div>
        </div>
    )
}

function clicked(props) {
    const input = document.querySelector('input');
    props.aM(input.value);
    input.value = '';
  }


export default ParksDisplay;