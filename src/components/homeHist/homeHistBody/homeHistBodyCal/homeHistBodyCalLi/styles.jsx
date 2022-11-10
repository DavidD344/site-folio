import styled,{css} from "styled-components";

export const BoxMainCalendLi = styled.div`
width: 220px;
height: 60px; 
display: flex;
flex-direction: row;
align-items: center;
padding-right: 10px;
cursor:pointer;
transition: all 0.5s ease-in-out;
&hover{

    border: solid;
    border-width: 1px;
    border-color: white;
    transition: all 0.5s ease-in-out;
}
`;

export const StickLeft = styled.div`
width: 24px;
height: 4px;
background-color: transparent;
margin-left: -64px;
margin-right: 40px;
transition: all 0.5s ease-in-out;
${props => props.active === true && css`
color:red;
background-color:white;
transition: all 0.5s ease-in-out;
`}
`;

/* 8B8B8B */

export const DataNumber = styled.h1`

color:#8B8B8B;
width: 50px;
font-family: 'Red Hat Display', sans-serif;
font-weight: 600;
font-size: 1.8rem;
transition: all 0.5s ease-in-out;
${props => props.active === true && css`
color:white;
transition: all 0.5s ease-in-out;
`}
`;


export const ArrowStick = styled.div`

width: 100px;
height: 4px;
background-color: transparent;
margin-left: 40px;
transition: all 0.5s ease-in-out;
${props => props.active === true && css`
background-color:white;
transition: all 0.5s ease-in-out;
`}
`;


export const ArrowCircle = styled.div`

    width: 10px;
    height: 10px;
    background-color: transparent;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    ${props => props.active === true && css`
background-color:white;
transition: all 0.5s ease-in-out;
`}
`