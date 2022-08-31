import React, { useEffect, useState } from "react";
import { InfoList, ListS, ButList } from "../styles";


const List = (props) =>{
 
  const [budgets,setBudgets]=useState(props.list)
  
  useEffect(()=>{
    setBudgets(props.list);
  },[props.list])
  
  const orderByName = () => {
    const order = budgets.map( budget => budget);
    order.sort((budgetOne,budgetTwo)=>(budgetOne.name < budgetTwo.name) ? -1 : 1);
    setBudgets(order);
  }

  const orderByDate = () => {
    const order = budgets.map( budget => budget);
    order.sort((budgetOne,budgetTwo)=>(budgetOne.date < budgetTwo.date) ? -1 : 1);
    setBudgets(order);
  }

  const orderRestart = () => {
    setBudgets(props.list); // This function and orderByDate results at the same.
  }

  return(
    
    <ListS className="ListSection">
      <ButList className="buttonsList">
        <button onClick={orderByName}>Ordena alfabèticament</button>
        <button onClick={orderByDate}>Ordena els més recents</button>
        <button onClick={orderRestart}>Restablir el ordre</button>
      </ButList>
      <div>
        { budgets.map(bud=>{
          return(
            <InfoList key={bud.date + " " + bud.name}>
              <p>Fac: {bud.name} Cli: {bud.user}  Preu: {bud.price}€</p>
              <p>Web: {bud.web ? "yes":"no"}  Nºpg: {bud.pg}  Nºlg: {bud.lgs}</p>  
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