import styled from "styled-components";

export const HeroCardStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    max-width: 320px;

    h2{
        position: absolute;
        color: #fff;
        bottom: 45px;
        z-index: 3;
        text-shadow: 1px 1px 5px #121212;
    }

    h4{
        margin-top: 9px;
        color: #121212;
    }
`