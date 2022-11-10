import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Container,LitleInf,LitleText,LitleNumb, MiniLogo, BoxTitle, TitleHead } from './styles'
import HomeHistHeadSwitch from './homeHistHeadSwitch'


const HomeHistHead=(props)=>{
    // props.dathiststate
    // props.setdathiststate
return(
<>
<Container className={`_pading_section`}>
    <LitleInf>
        <MiniLogo src="./public/logo/logo-mini.png" alt="logo"></MiniLogo>
        <LitleNumb>03.</LitleNumb>
        <LitleText>Achievements</LitleText>
    </LitleInf>

    <BoxTitle>
        <TitleHead>
        We Make Designs that Lead and Inpire.
        </TitleHead>
        <HomeHistHeadSwitch
        dathiststate={props.dathiststate}
        setdathiststate={props.setdathiststate}
        ></HomeHistHeadSwitch>
    </BoxTitle>
   
 
</Container>
</>
)
}

export default HomeHistHead

