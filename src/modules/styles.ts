import styled from "styled-components"

export const Container = styled.main`
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.colors.ContainerColor};

`;

export const Content = styled.div`
    width: 1700px;
    min-height: 800px;
    padding: 1rem 0;
    
    background-color: ${props => props.theme.colors.ContentColor};
`;
