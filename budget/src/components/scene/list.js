import React, { useEffect,useState } from "react";
import { ListS } from "../styles";


const List = (props) =>{
 
 
  return(
    <ListS>
       { props.list.map(bud=>{
        return(
         <p key={bud.date + " " + bud.name}>
          Fac. {bud.name} Cli. {bud.user}  {bud.price}€ 
          web={bud.web ? "yes":"no"} nºpg {bud.pg} nºlg {bud.lgs}  
          seo={bud.seo ? "yes":"no"} ads={bud.ads ? "yes":"no"} data={bud.date}</p> 
        )
       })}
    </ListS>
  )
}

export default List;