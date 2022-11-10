import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Container,LitleInf,LitleText,LitleNumb, Title, BigNumber, MiniLogo, EmojiText } from './styles'


const HomeAchievCont=()=>{

  
return(
<>
<Container>
    <LitleInf>
        <MiniLogo src="./public/logo/logo-mini.png" alt="logo"></MiniLogo>
        <LitleNumb>03.</LitleNumb>
        <LitleText>Achievements</LitleText>
    </LitleInf>
    <Title>A design team building a curated marketplace for UI designers.</Title>
    <BigNumber>68</BigNumber>
    <EmojiText>&#x1F60E; Successful Projects</EmojiText>
 
</Container>
</>
)
}

export default HomeAchievCont

