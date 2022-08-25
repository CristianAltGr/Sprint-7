import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        p{
            font-size: 2em;
        }
       
    }
`
export const Body = styled.div`
    margin-left: 2vh;
`

export const PanelS = styled.div` 
    margin-top: 2vh;
    margin-bottom: 2vh;
    margin-right: 55%;
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
    button{
        font-size: 3vh;
        font-weight: bold;
        color: white;
        border: none;
        border-radius: 8px;
        background-color: #fd5716;
    }
`

export const InputX = styled.input`
    width: 2vh;
    height: 2vh;
`

