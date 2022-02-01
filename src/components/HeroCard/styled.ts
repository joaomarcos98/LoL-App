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
        bottom: 55px;
        z-index: 3;
        text-shadow: 1px 1px 5px #121212;
    }

    h4{
        margin: 8px;
        font-size: 1.2rem;
        color: #121212;
        margin-right: 12px;
    }

    &>.favorite{
        position: absolute;
        top: 12px;
        right: 12px;

        img{
            width: 35px;
            cursor: pointer;
            filter: drop-shadow(1px 1px 5px #fc03a1);
        }
    }
`