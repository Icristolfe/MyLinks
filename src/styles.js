import styled from 'styled-components'

export const Body = styled.div`
width:100%
;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
padding-top:25px;

`

export const Container = styled.div`
width: 400px;
height: 100vh;
border-radius: 14px;
border:none;
outline:none;
display:flex;
flex-direction:column;
align-items:center;
color:#EEEEEE;

    h1 {
        margin-bottom: 25px;
        font-size: 30px;
        }

        button {
            background: rgba(255, 255, 255, 0.10);
            box-shadow: 30px 2px 0px rgba(220, 220, 220, 0.70);
            width: 100px;
            height: 100px;
            font-size: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction:column;
            border-radius:50%;
            border:none;
            margin-bottom: 30px;

            &:hover {
                opacity:0.7;
            }

            &:active {
                opacity:0.4;
            }
        }

        a {
            outline:none;
            text-decoration:none;
            color:#EEEEEE;
            background: none;
        }

        svg {
            background:none;
        }
`