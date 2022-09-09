import React from "react";
import { ButtonS, InputS, PanelS } from "../styles";
import PopUp from "./PopUP";

const Panel = (props) => {

    return ( props.webCheck &&
    <PanelS className="configWeb">
        
        <InputS>
        <span><p>Número de pàgines</p></span>
            <ButtonS onClick={props.funcBtn} name= "plusPg">+</ButtonS>
            <input type="number" min={0} name="pag" id="pags" value={props.pages} onChange={props.func} />
            <ButtonS onClick={props.funcBtn} name= "reducePg">-</ButtonS>
            <PopUp  text="Aquest apartat ha d'indicar el nombre de pàgines de la seva web."></PopUp>
        </InputS>
       
        <InputS>
        <span><p>Número de idiomes</p></span>
            <ButtonS onClick={props.funcBtn} name= "plusLg">+</ButtonS>
            <input type="number" min={0} name="idiom" id="idioms" value={props.idioms} onChange={props.func} />
            <ButtonS onClick={props.funcBtn} name= "reduceLg">-</ButtonS>
            <PopUp text="Aquest apartat ha d'indicar el nombre d'idiomes de la seva web."></PopUp>
        </InputS>
    </PanelS>
    )
}

export default Panel;