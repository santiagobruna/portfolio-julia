import styled from "styled-components";
import variables from "../../styles/variables";

export const ContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    min-height: 30vw;
    width: 100%;
    background-color: ${variables.backgroundFooter};
    @media(max-width: 768px){
        padding: 20px;
    }
`