
import './App.css';
import Check from './components/scene/form';
import Panel from './components/scene/panel';
import { useEffect, useState } from 'react';
import { GlobalStyle, PanelInput} from './components/styles';
import SavedInput from './components/scene/saveBudget';
import Budget from './components/scene/ClassBuget';
import List from './components/scene/list';
import { Contain } from './components/styles';
import { useSearchParams } from 'react-router-dom';



function App() {

  // exercice 11
  //I do this before whit useLocation and knew useHistory was deprecated jeje because this i search more and
  //found useSearchParams
  const [Params,setParams] = useSearchParams(); 

  const web = Params.get("web");
  const pag = Params.get("pag");
  const idiom = Params.get("idiom");
  const seo = Params.get("seo");
  const ads = Params.get("ads"); 
  let attrURL;
    
  if((web===null||web==="")||(pag===null||pag==="")||(idiom===null||idiom==="")||(seo===null||seo==="")||(ads===null||ads==="")){
    attrURL = null;
  }else{
    attrURL = 
    [{name:"web", value: 500, check: web==="true" ? true : false , pages: parseInt(pag), idiom: parseInt(idiom)},
    {name:"seo", value: 300, check: seo==="true" ? true : false},
    {name:"ads", value: 200, check: ads==="true" ? true : false}]
  } 

//For next projects i will think about control of params input, at the browser because you can write another values
  
// init project

  const [price,setPrice]= useState(0);
  const [status,setStatus]= useState(
    attrURL || JSON.parse(localStorage.getItem(`data`))||
  [{name:"web", value: 500, check: false, pages: 0, idiom: 0},
  {name:"seo", value: 300, check: false},
  {name:"ads", value: 200, check: false}]);
  const [nameUser, setName]= useState("");
  const [nameBudget, setBudget]= useState("");
  const [listBudget,setList]=useState(JSON.parse(localStorage.getItem(`list`))||[]);
  
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
        if(service.pages>0 && action === "reducePg"){
          service.pages--;  
        } else if(service.idiom>0 &&action === "reduceLg"){
          service.idiom--;
        }
      }
      return service
    } )  
  setStatus(newStatus);
  }

  const configBudget = (event) => {
    const element = event.target;
    
    if (element.className === "nameBudget"){
      setBudget(element.value);  
    } else if(element.className === "user"){
      setName(element.value);
    }
}

  const BudgetList = (event) => {
    event.preventDefault();
    const date = new Date().toLocaleString();
    const budgetObj = new Budget(nameBudget,nameUser,status[0].check,status[0].pages,status[0].idiom,status[1].check,status[2].check,price,date);
    
    setList([...listBudget,budgetObj]);
  }

  const deleteList = () => {
    setList([]);
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
    setParams({web: status[0].check,pag: status[0].pages, idiom: status[0].idiom, ads: status[1].check,seo:status[2].check} )
  },[status]) 


  return (
    
    <>
      <GlobalStyle/>
      <Contain className="container">
        <div className="interface">
          <h3>¿Que vols fer?</h3>
          <form >
            <PanelInput>
              <Check name="web" price={500} checked={status[0].check} onChange={selectService}></Check>
              <label><p>Una pàgina web (500€)</p></label>
            </PanelInput>
              <Panel webCheck={status[0].check} func={configureWeb} funcBtn={configureBtn} pages={status[0].pages} idioms={status[0].idiom}></Panel>
            <PanelInput>
              <Check name="seo" price={300} checked={status[1].check} onChange={selectService}></Check>
              <label><p>Una consultoria SEO (300€)</p></label>
            </PanelInput>
            <PanelInput>
              <Check name="ads" price={200} checked={status[2].check} onChange={selectService}></Check>
              <label><p>Una campaña de Google Ads (200€)</p></label>
            </PanelInput>
          </form>
          <div>
            <p>El seu pressupost és:</p>
            <p>{price}€</p>          
          </div>
          <SavedInput onClick={BudgetList} onChange={configBudget}/>
        </div>
        <List list={listBudget} onClick={deleteList}></List>
      </Contain>
    </>
  );
}

export default App;