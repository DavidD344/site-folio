import { Link } from 'react-router-dom'
import { useState } from 'react'
import {ContainerLeft, ContainerLeftCont, ContText, ContTitle, StickPink} from './styles'
import ButtonBox from '../../buttonBox'




const HomeHistEndCont=(props)=>{

    
return(
<>
<ContainerLeft>
<StickPink></StickPink>
    <ContainerLeftCont>
        <ContTitle>
        A design team building a curated marketplace for UI designers.
        </ContTitle>
        <ContText>
        4,404 curated design resources to energize your creative workflow. We're a growing family of 334,531 designers and makers from around the world
        </ContText>
        <ButtonBox
        msg={"Contact Us"}
        buttonColor={false}
        >Contatct us</ButtonBox>
    
    </ContainerLeftCont>
</ContainerLeft>





</>
)
}

export default HomeHistEndCont

