import logo from './logo.svg';
import './App.css';
import Check from './components/scene/form';
import { useEffect, useState } from 'react';

function App() {

  const [price,setPrice]= useState(0);
  const [status,setStatus]= useState([
  {name:"web", value: 500, check: false},
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

  useEffect(()=>{
    
    const total= status.reduce( (acc,state) => {
      
      if(state.check=== true){
        acc = acc + state.value;
      }
      return acc
    },0)
    
    setPrice(total);
  },[status]) 

  return (
    <>
      <p>¿Que vols fer?</p>
      <form action="">
        <div>
        <Check name="web" value={500} checked onChange={selectService}></Check>
        <label>Una pàgina web (500€)</label>
        </div>
        <div>
        <Check name="seo" value={300} checked onChange={selectService}></Check>
        <label>Una consultoria SEO (300€)</label>
        </div>
        <div>
        <Check name="ads" value={200} checked onChange={selectService}></Check>
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
