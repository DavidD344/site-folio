import styled from "styled-components";




export const BoxBut =  styled.div`

width: 30%;
display: flex;
flex-direction: row;
justify-content: flex-end;
margin-top: 9px;

`
export const Circle = styled.div`

width: 64px;
height: 64px;
border-radius: 34px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all 0.5s ease-in-out;

&:hover{
    background-color: #5468E7;
    transition: all 0.4s ease-out;

}

`

export const CircleImg = styled.img`

width: 22px;
transform: rotate(${(props) => props.rotateimg});

`