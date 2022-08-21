import React from "react";

const Panel = (props) => {
    
    return ( props.webCheck &&
    <div className="configWeb">
        <div>
            <span>Número de pàgines</span>
            <button onClick={props.funcBtn} name= "plusPg">+</button>
            <input type="number" min={0} name="pag" id="pags" value={props.pages} onChange={props.func} />
            <button onClick={props.funcBtn} name= "reducePg">-</button>
        </div>
        <div>
            <span>Número de idiomes</span>
            <button onClick={props.funcBtn} name= "plusLg">+</button>
            <input type="number" min={0} name="idiom" id="idioms" value={props.idioms} onChange={props.func} />
            <button onClick={props.funcBtn} name= "reduceLg">-</button>
        </div>
    </div>
    )
}

export default Panel;