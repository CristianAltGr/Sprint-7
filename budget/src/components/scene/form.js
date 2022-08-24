import React from "react";

const Check = props => <input 
    type="checkbox" 
    name={props.name} 
    value={props.value} 
    checked={props.checked}
    onChange={props.onChange} 
    ></input>

export default Check;