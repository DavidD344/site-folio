import { Link } from 'react-router-dom'
import { useState } from 'react'
import {BoxMainCalend} from './styles'
import HomeHistBodyCalLi from './HomeHistBodyCalLi'



const HomeHistBodyCal=(props)=>{

    
return(
<>

<BoxMainCalend className='_pading_section'>

<HomeHistBodyCalLi
id={2018}
dathiststate={props.dathiststate}
setdathiststate={props.setdathiststate}
></HomeHistBodyCalLi>
<HomeHistBodyCalLi
id={2019}
dathiststate={props.dathiststate}
setdathiststate={props.setdathiststate}
></HomeHistBodyCalLi>
<HomeHistBodyCalLi
id={2020}
dathiststate={props.dathiststate}
setdathiststate={props.setdathiststate}
></HomeHistBodyCalLi>

<HomeHistBodyCalLi
id={2021}
dathiststate={props.dathiststate}
setdathiststate={props.setdathiststate}
></HomeHistBodyCalLi>

<HomeHistBodyCalLi
id={2022}
dathiststate={props.dathiststate}
setdathiststate={props.setdathiststate}
></HomeHistBodyCalLi>



</BoxMainCalend>

</>
)
}

export default HomeHistBodyCal

