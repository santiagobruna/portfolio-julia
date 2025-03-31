import styled from "styled-components";
import variables from "../../styles/variables";
export const ContainerArtigos = styled.div`
    display: flex ;
    flex-direction: column;
    justify-content: center;
    padding: 30px 60px;
    background-color: ${variables.backgroundSections};
    color: #fff;
    min-height: 40vw;
    @media (max-width: 768px){
        padding: 30px 20px;
        margin: 0 auto;
    }
`
