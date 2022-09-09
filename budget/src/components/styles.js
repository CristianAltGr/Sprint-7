import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        h3{
            font-size: 2em;
        }

        p{
            font-size: 2em;
        }
       
    }
`

export const Contain = styled.div`
    margin-left: 2vh;
    display: grid;
    grid-template-columns: 40% 60%;
`

export const PanelS = styled.div` 
    margin-top: 2vh;
    margin-bottom: 2vh;
    margin-right: 10%;
    padding: 2vh;
    border: 4px solid black;
    border-radius: 60px;

    button{
        margin: 5px;
        width: 4vh;
        height: 4vh;
    }

`

export const PanelInput = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`

export const InputS = styled.div`
    display: flex;
    align-items: center;
    margin: 10px;
    
    input{
        font-size: 2vh;
        width: 5em;
        text-align: center;
        border: none;
    }
   
`
export const ButtonS = styled.button`
 font-size: 3vh;
        font-weight: bold;
        color: white;
        border: none;
        border-radius: 8px;
        background-color: #fd5716;
`

export const InputX = styled.input`
    width: 2vh;
    height: 2vh;
`
export const Info = styled.button`
    background-color: grey;
    color: white;
    padding-left: 10px;
    border-radius: 33px;
    width: 2vh;
    height: 2vh;
    border: none;
`
export const PopBg = styled.div`
    position: absolute;
    z-index: 1;
    background-color: #80808075;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;

    .containerPop{
        position: absolute;
        left: 65vh;
        top:65vh;
        padding: 3vh;
        background-color: white;
        border: 6px solid black;
        border-radius: 60px;
    }
`

export const Hero = styled.div`
    font-size: 2vh;
`

export const InputBudget = styled.div`
    
    display: flex;
    flex-direction: column;
    
    input{
        margin: 15px;
        width: 15em;
        height: 2.5em;
        font-size: 2em;
        text-align: center;
    }
    button{
        border-radius: 30px;
        width: 30vh;
        height: 8vh;
        font-size: 2em;
        margin-left: 25vh;

        :hover{
            background-color: #fd5716;
            color:white;
            transition: 0.5s;
            opacity: 91%;
        }
        
    }
`

export const ListS = styled.div`
    background-color: #f5b8688d;   
`

export const InputList = styled.div`
    display: flex;
    justify-content: center;
    margin: 2vh;

    input{
        width: 80%;
        height: 4vh;
        font-size: 1.7em;
        text-align: center;
        border-radius: 10px;
    }
`

export const ButList = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2vh;

    button{
        width: 23vh;
        height: 7vh;
        font-size: 1.7em;
        border-radius: 10px;
        
        :hover{
            background-color: #fd5716;
            color: white;
        }
    }
`

export const InfoList = styled.div`
    background-color: #c8ffbb;
    display: flex;
    justify-content: space-around;
    border: 2px solid black;
    margin: 10px;
`