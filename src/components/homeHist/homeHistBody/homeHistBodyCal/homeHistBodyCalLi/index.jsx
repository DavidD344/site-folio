import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ArrowCircle, ArrowStick, BoxMainCalendLi, DataNumber, StickLeft} from './styles'



const HomeHistBodyCalLi=(props)=>{
    // props.id

    let datActive
    if(props.dathiststate == props.id){
        datActive = true
    }

    function Downdata(){
        props.setdathiststate(props.id);
    }
 
return(
<>
<BoxMainCalendLi onClick={()=>{Downdata()}}>
    
    <StickLeft
    active={datActive}
    >
    
    </StickLeft>
    <DataNumber
     active={datActive}
    >{props.id}
    </DataNumber>

    <ArrowStick
     active={datActive}
    ></ArrowStick>
    <ArrowCircle
    active={datActive}
    >      
    </ArrowCircle>

</BoxMainCalendLi>
</>
)
}

export default HomeHistBodyCalLi

