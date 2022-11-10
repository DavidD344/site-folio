import { Link } from 'react-router-dom'
import { useState } from 'react'
import {ContainerBody } from './styles'
import HomeHistBodyCal from './homeHistBodyCal'
import HomeHistBodyPlan from './homeHistBodyPlan'



const HomeHistBody=(props)=>{

    
return(
<>

<ContainerBody>

   <HomeHistBodyPlan
    dathiststate={props.dathiststate}
    setdathiststate={props.setdathiststate}
   ></HomeHistBodyPlan>
   <HomeHistBodyCal  
   dathiststate={props.dathiststate}
setdathiststate={props.setdathiststate}
   ></HomeHistBodyCal>

</ContainerBody>

</>
)
}

export default HomeHistBody

