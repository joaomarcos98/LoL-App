import styled from "styled-components";


export const LoadingStyle = styled.div`

    display: flex;
    align-items: center;
    row-gap: 2rem;
    justify-content: space-evenly;
    flex-wrap: wrap;

    img {
        margin-top: 64px;
        width: 100px;
        animation: rotating 2s linear infinite;
    }

    @keyframes rotating {
        from{
            transform: rotate(0deg)
        }
        to{
            transform: rotate(360deg);
        }
    }
`