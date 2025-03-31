import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    margin-bottom: 40px;
`;
export const Card = styled.div`
    max-width: 300px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: #fff;
    border-radius: 12px;
    padding: 16px;
    text-align: center;
    box-shadow: 0px 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s;
    cursor: pointer;
    &:hover {
        transform: translateY(-5px);
    }
`;

