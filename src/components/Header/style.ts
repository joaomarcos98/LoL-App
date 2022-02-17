import styled from "styled-components";


export const HeaderStyle = styled.header`

    background-color: ${props => props.theme.colors.HeaderBgColor};
    display: flex;
    justify-content: center;

    &>div{
        padding: 1rem;
        width: 1700px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            color: ${props => props.theme.colors.textColor};
        }
    }
`