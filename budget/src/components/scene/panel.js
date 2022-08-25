import React from "react";
import { InputS, PanelS } from "../styles";

const Panel = (props) => {
    
    return ( props.webCheck &&
    <PanelS className="configWeb">
        
        <InputS>
        <span><p>Número de pàgines</p></span>
            <button onClick={props.funcBtn} name= "plusPg">+</button>
            <input type="number" min={0} name="pag" id="pags" value={props.pages} onChange={props.func} />
            <button onClick={props.funcBtn} name= "reducePg">-</button>
        </InputS>
       
        <InputS>
        <span><p>Número de idiomes</p></span>
            <button onClick={props.funcBtn} name= "plusLg">+</button>
            <input type="number" min={0} name="idiom" id="idioms" value={props.idioms} onChange={props.func} />
            <button onClick={props.funcBtn} name= "reduceLg">-</button>
        </InputS>
    </PanelS>
    )
}

export default Panel;