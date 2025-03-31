import styled from "styled-components";
export const HeroContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
    width: 100%;
    height: 100vh;
    
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
`

export const ContainerInfos = styled.div`
    max-width: 600px;
`


export const Image = styled.img`
    max-width: 600px;
    min-height: auto;
    width: 100%;
    cursor: pointer;
    border-radius: 20px;
`