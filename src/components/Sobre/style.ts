import styled from "styled-components";
import variables from "../../styles/variables";
export const ContainerSobre = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 40px;
    margin-bottom: 4rem;
    padding: 2rem;
    width: 100%;
    min-height: 100vh;
    background-color: ${variables.backgroundSections} ;
    color: #fff;
    
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }

`
export const Titulo = styled.h2`
    font-size: 38px;
    font-family: "Barlow Condensed", sans-serif;
`
export const Profile = styled.img`
    max-width: 350px;
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
`
export const ContainerProfissao = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
export const Decricao = styled.p`
    max-width: 600px;
    width: 100%;
    margin: 20px 0;
`

