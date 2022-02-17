import styled from "styled-components";

export const HeroCardStyle = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;

    max-width: 320px;
    border-radius: 8px;
    padding-bottom: 1rem;
    background-color: #030303;
    
    transition: 0.2s;

    &:hover{
        cursor: pointer;
        
        box-shadow: 0 0 10px #00cef7;
    }

    &>img{
        border-radius: 8px;
    }

    h2{
        z-index: 3;
        bottom: 85px ;
        position: absolute;

        color: #fff;
        text-shadow: 1px 1px 5px #121212;
    }

    h4{
        margin: 10px 0 5px;
        margin-right: 12px;

        color: #cacaca;
        font-size: 1.2rem;
    }

    &>.favorite{
        top: 12px;
        right: 12px;
        position: absolute;

        img{
            width: 35px;
            filter: drop-shadow(1px 1px 5px #fc03a1);

            cursor: pointer;
        }
    }
`

export const BadgeList = styled.div`
    display: flex;
    justify-content: space-around;
    
    width: 100px;

    img{
        width: 35px;
    }
`