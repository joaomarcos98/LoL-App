import styled from "styled-components";


export const HeaderStyle = styled.header`

    background-color: ${props => props.theme.colors.HeaderBgColor};
    padding: 1rem;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            color: ${props => props.theme.colors.textColor};
        }
    }
`