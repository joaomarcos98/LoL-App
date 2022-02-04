import styled from "styled-components";

export const HeroCardStyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    background-color: #030303;
    padding-bottom: 1rem;

    max-width: 320px;

    &:hover {
        transform: translateY(-10px);
    }

    &:not(:hover) {
        animation: down;

        @keyframes down {
            from {
                top: -10px
            }
            to {
                top: 0;
            }
        }
    }

    h2{
        position: absolute;
        color: #fff;
        bottom: 85px ;
        z-index: 3;
        text-shadow: 1px 1px 5px #121212;
    }

    h4{
        margin: 10px 0 5px;
        font-size: 1.2rem;
        color: #cacaca;
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

export const BadgeList = styled.div`
    display: flex;
    width: 100px;
    justify-content: space-around;

    img{
        width: 35px;
    }
`