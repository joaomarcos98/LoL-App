import styled from "styled-components";


export const LoadingCardStyle = styled.div`
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 308px; 
    overflow: hidden;

    .simulate-img{
        height: 560px;
        width: 308px;  
        background: #dedede;
    }

    .simulate-img__pass{
        height: 560px;
        width: 308px; 
        background: linear-gradient(90deg, rgba(222,222,222,1) 0%, rgba(187,187,187,1) 30%, rgba(187,187,187,1) 70%, rgba(223,222,222,1) 100%);
        position: absolute;
        top: 0;
        animation: pass 3s infinite;
    }

    .simulate-txt{
        height: 22px;
        width: 308px;  
        background: #dedede;
        margin-top: 8px;
    }

    .simulate-txt__pass{
        position: absolute;
        bottom: 0;
        height: 22px;
        width: 308px;  
        background: linear-gradient(90deg, rgba(222,222,222,1) 0%, rgba(187,187,187,1) 30%, rgba(187,187,187,1) 70%, rgba(223,222,222,1) 100%);
        animation: pass 3s infinite;
        margin-top: 8px;
    }

    @keyframes pass {
        from{
            left: -308px;
        }
        to{
            left: 308px;
        }
    }

`