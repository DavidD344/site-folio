import { Link } from 'react-router-dom'
import { useState } from 'react'
import {ContainerEnd } from './styles'
import HomeHistEndCont from './homeHistEndCont'
import HomeHistEndSoloNum from './homeHistEndNum'




const HomeHistEndSolo=(props)=>{

    
return(
<>
<ContainerEnd className='_pading_section'>

<HomeHistEndCont></HomeHistEndCont>

<HomeHistEndSoloNum></HomeHistEndSoloNum>
</ContainerEnd>


</>
)
}

export default HomeHistEndSolo

