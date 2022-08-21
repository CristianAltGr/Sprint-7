import React from "react";

const Panel = (props) => {
    
    return ( props.webCheck &&
    <div className="configWeb">
        <div>
            <span>Número de pàgines</span>
            <input type="number" min={0} name="pag" id="pags" onChange={props.func} />
        </div>
        <div>
            <span>Número de idiomes</span>
            <input type="number" min={0} name="idiom" id="idioms" onChange={props.func} />
        </div>
    </div>
    )
}

export default Panel;