import React from "react";
import {Link} from "react-router-dom";

const Welcome = () =>{

    return(
        <div className="container">
            <h1 className="hero">Benvigut al seu proyecte! </h1>
            <p>A continuació pot escollir el servei més adequat a les seves necessitats i consultar un pressupost l'instant! </p>
            <Link to="budget">Consulta</Link>
        </div>
    )
}

export default Welcome