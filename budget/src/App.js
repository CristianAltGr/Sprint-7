import logo from './logo.svg';
import './App.css';
import Check from './components/scene/form';
import Panel from './components/scene/panel';
import { useEffect, useState } from 'react';

function App() {

  const [webConf,setWeb]=useState(false);
  const [price,setPrice]= useState(0);
  const [status,setStatus]= useState([
  {name:"web", value: 500, check: false, pages: 0, idiom: 0},
  {name:"seo", value: 300, check: false},
  {name:"ads", value: 200, check: false}]);
  
  const selectService = (event) => {

    const target = event.target;
    const newStatus = status.map( (service) =>{
      
      if (target.name === service.name && target.checked === true){
        service.check =true; 
        if(target.name === "web"){
          setWeb(true);
        }

      } else if( target.name === service.name && target.checked === false ){
        service.check = false;
        if(target.name === "web"){
          setWeb(false);
        }

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
        if((service.idiom&&service.pages)>0){
          action === "reducePg" ? service.pages-- : service.idiom--;  
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
  },[status]) 

  return (
    <>
      <p>¿Que vols fer?</p>
      <form >
        <div>
        <Check name="web" price={500} checked onChange={selectService}></Check>
        <label>Una pàgina web (500€)</label>
        </div>
        <Panel webCheck={webConf} func={configureWeb} funcBtn={configureBtn} pages={status[0].pages} idioms={status[0].idiom}></Panel>
        <div>
        <Check name="seo" price={300} checked onChange={selectService}></Check>
        <label>Una consultoria SEO (300€)</label>
        </div>
        <div>
        <Check name="ads" price={200} checked onChange={selectService}></Check>
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
