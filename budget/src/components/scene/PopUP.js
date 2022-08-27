import React from "react";
import { useState } from "react";
import { Info,PopBg } from "../styles";


const PopUp = (props) => {

    const [advice,setAdvice]=useState(false);
    const changeAdvice = (event)=>{
        event.preventDefault();
    
        if(advice){
            setAdvice(false)
        }else if(!advice){
            setAdvice(true)
        }
    }
    return(   
        <>      
        <Info onClick={changeAdvice} style={{ display: "inline-block" }}>info</Info>
        {advice &&
        <PopBg className="bgPop" onClick={changeAdvice} >
            <div className="containerPop">
                <p>{props.text}</p>  
            </div>
        </PopBg>}
        </> 
    )
}

export default PopUp;