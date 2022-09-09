import React from "react";
import { InputX } from "../styles";

const Check = props => <InputX 
    type="checkbox" 
    name={props.name} 
    value={props.value} 
    checked={props.checked}
    onChange={props.onChange} 
    ></InputX>

export default Check;