import React from "react";
import { InputBudget } from "../styles";

const SavedInput = (props) =>{

    return(
        <InputBudget>
            <div>
                <input className="nameBudget" placeholder="Nom del pressupost"  type="text" onChange={props.onChange}/>
                <input className="user" placeholder="Nom del client" type="text" onChange={props.onChange} />
            </div>
            <button onClick={props.onClick} >Guarda el pressupost</button>
        </InputBudget>
    )
}

export default SavedInput;