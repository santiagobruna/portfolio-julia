import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import variables from "./variables";
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Nunito", sans-serif;
    }
    html, body{
        overflow-x: hidden;
    }
`
export const Texto = styled.p`
    margin: 20px 0;
    max-width: 380px;
`
export const Button = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    border: 1px solid #AC5452; 
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    background-color:#ec474e ;
    &:hover {
        background-color: #d7262d;
    }
`
export const TitleWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    p {
        margin-top: 20px;
    }
`;
export const Titulo = styled.h2`
    font-size: 38px;
    font-family: "Barlow Condensed", sans-serif;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 167px;
    padding: 30px 60px;
    min-height: 40vw;
    @media (max-width: 768px) {
        margin: 0 auto;
        flex-direction: column;
        gap: 50px; /* Ajuste a separação entre os elementos */
    }
`

export const ContainerSencundario = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: ${variables.backgroundSections};
    min-height: 50vw;
`
export const TituloSecundario = styled.h2`
    font-size: 38px;
    font-family: "Barlow Condensed", sans-serif;
    color: #fff;
    text-align: center;
    margin-top: 160px;
`