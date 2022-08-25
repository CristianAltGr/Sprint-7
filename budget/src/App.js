
import './App.css';
import Check from './components/scene/form';
import Panel from './components/scene/panel';
import { useEffect, useState } from 'react';

function App() {

  const [price,setPrice]= useState(0);
  const [status,setStatus]= useState(
    JSON.parse(localStorage.getItem(`data`))||
  [{name:"web", value: 500, check: false, pages: 0, idiom: 0},
  {name:"seo", value: 300, check: false},
  {name:"ads", value: 200, check: false}]);
  
  const selectService = (event) => {

    const target = event.target;
    const newStatus = status.map( (service) =>{
      
      if (target.name === service.name && target.checked === true){
        service.check =true;  
      } else if( target.name === service.name && target.checked === false ){
        service.check = false;
      } 
      
      return service;
    }) 

  setStatus(newStatus);
  }

  const configureWeb = (event) => {

    const newStatus = status.map((service) => {

      if(service.name === "web" && event.target.name === "pag"){
        event.target.value > 0 ? service.pages = event.target.value : service.pages = 0;
      } else if(service.name === "web" && event.target.name === "idiom"){
        event.target.value > 0 ? service.idiom = event.target.value : service.idiom = 0;
      }
      
      return service
    } )
  
  setStatus(newStatus);
  }

  const configureBtn = (event) => {

    event.preventDefault();
    const action = event.target.name;
    
    const newStatus = status.map((service) => {

      if(service.name === "web" && ((action ==="plusPg")||(action ==="plusLg"))){
        action === "plusPg" ? service.pages++ : service.idiom++;  
      } else if(service.name === "web" && ((action ==="reducePg")||(action ==="reduceLg"))){
        if((service.pages&&action === "reducePg")>0){
          service.pages--;  
        } else if((service.idiom&&action === "reduceLg")>0){
          service.idiom--;
        }
      }
      return service
    } )  
  setStatus(newStatus);
  }

  useEffect(()=>{
    
    const total= status.reduce((acc,state) => {
      
      if(state.check=== true){
        acc = acc + state.value;

        if(state.name==="web"){
          
          const PRICEWORK = 30;
          acc = acc + ((state.pages*state.idiom)*PRICEWORK);
        }
      }
      return acc
    },0)
    
    setPrice(total);
    localStorage.setItem(`data`, JSON.stringify(status))
    
  },[status]) 


  return (
    <>
      <p>¿Que vols fer?</p>
      <form >
        <div>
        <Check name="web" price={500} checked={status[0].check} onChange={selectService}></Check>
        <label>Una pàgina web (500€)</label>
        </div>
        <Panel webCheck={status[0].check} func={configureWeb} funcBtn={configureBtn} pages={status[0].pages} idioms={status[0].idiom}></Panel>
        <div>
        <Check name="seo" price={300} checked={status[1].check} onChange={selectService}></Check>
        <label>Una consultoria SEO (300€)</label>
        </div>
        <div>
        <Check name="ads" price={200} checked={status[2].check} onChange={selectService}></Check>
        <label>Una campaña de Google Ads (200€)</label>
        </div>
      </form>
      <div>
        <p>El seu pressupost és:</p>
        <p>{price}</p>
        
      </div>
    </>
  );
}

export default App;
