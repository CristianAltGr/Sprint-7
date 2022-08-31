import React from "react";
import { InfoList, ListS, ButList } from "../styles";


const List = (props) =>{
 
  
 
  return(
    
    <ListS className="ListSection">
      <ButList className="buttonsList">
        <button>Ordena alfabèticament</button>
        <button>Ordena els més recents</button>
        <button>Restablir el ordre</button>
      </ButList>
      <div>
        { props.list.map(bud=>{
          return(
            <InfoList key={bud.date + " " + bud.name}>
              <p>Fac: {bud.name} Cli: {bud.user}  Preu: {bud.price}€</p>
              <p>Web:  {bud.web ? "yes":"no"}  Nºpg: {bud.pg}  Nºlg: {bud.lgs}</p>  
              <p>Seo: {bud.seo ? "yes":"no"}</p>
              <p>Ads: {bud.ads ? "yes":"no"}</p> 
              <p>Data: {bud.date}</p>
            </InfoList> 
          )
        })}
      </div>
    </ListS>
  )
}

export default List;