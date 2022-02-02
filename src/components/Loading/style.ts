import styled from "styled-components";


export const LoadingStyle = styled.div`

    display: flex;
    align-items: center;
    row-gap: 2rem;
    justify-content: space-evenly;
    flex-wrap: wrap;

    img {
        width: 300px;
        animation: grow 2s infinite;
    }

    @keyframes grow {
        from {width: 300px}
        to{width:600px}
    }
`