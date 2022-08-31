import React, { useEffect, useState } from "react";
import { InfoList, ListS, ButList, InputList } from "../styles";


const List = (props) =>{
 
  const [budgets,setBudgets]=useState(props.list);
  
  useEffect(()=>{
    setBudgets(props.list);
    localStorage.setItem(`list`, JSON.stringify(props.list))
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

  const searchBudget = (event) => {
    const search = event.target.value;

    if(search=== ""){
      setBudgets(props.list);
    }else{
      const found = props.list.filter( budget => (budget.name.startsWith(search)))
      setBudgets(found);
    }
  }

  return(
    
    <ListS className="ListSection">
      <InputList className="searchBudgets">
        <input type="text" placeholder="Busca el pressupost pel nom" onChange={searchBudget}/>
      </InputList>
      <ButList className="buttonsList">
        <button onClick={orderByName}>Ordena alfabèticament</button>
        <button onClick={orderByDate}>Ordena els més recents</button>
        <button onClick={orderRestart}>Restablir l'ordre</button>
        <button onClick={props.onClick}>Eliminar</button>
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