import styled from "styled-components";
import variable from '../../styles/variables'
// Definindo o container
export const ContainerHeader = styled.div`
    color: ${variable.primaryColor};
    padding: 2rem;
    width: 100%;
    background-color: ${variable.colorHeader};
`;
export const NavLink = styled.a`
    position: relative;
    text-decoration: none;
    color: white;

    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px; 
        width: 0;
        height: 2px;
        background-color: white;
        transition: width 0.3s ease-in-out;
    }

    &:hover:after {
        width: 100%;
    }
`;