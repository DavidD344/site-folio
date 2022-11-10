import styled from "styled-components";


export const TopBg = styled.div`

width:100%;
padding-top: 30px;
margin-top: 60px;
/* 
background-image: url("/public/homehist/pix.png"),linear-gradient(
  90deg,
  rgba(2, 0, 36, 1) 0%,
  rgba(9, 9, 121, 1) 35%,
  rgba(0, 212, 255, 1) 100%
); */

background-image: linear-gradient( to bottom, white 25%, white),
linear-gradient( to right, rgba(2, 0, 36, 1) 0%,
  rgba(9, 9, 121, 1) 35%,
  rgba(0, 212, 255, 1) 100% );

background-repeat:no-repeat,no-repeat;
background-position: top, bottom;
background-size: 100% 10% ,100% 90%;
   
`

export const Container = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-top: 60px;

background-image:url("/public/homehist/bghist.png");
   
    background-repeat:no-repeat;
    background-position: right top;       
    background-size: auto 100%;

`;






// export const Title = styled.h1`
// font-size: 16px;
// color: ${props => props.cor};
// `

