import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BoxBut, Circle, CircleImg } from './styles'



const HomeHistHeadSwitch=(props)=>{

    
return(
<>

<BoxBut>
<Circle   
    onClick={()=>{
        if (props.dathiststate >2018 ) {
            props.setdathiststate(props.dathiststate-1)
          
        }
    }}>

    <CircleImg 
    src='./public/homehist/left-normal.png'
    rotateimg={"0deg"}
    >       
    </CircleImg>
</Circle>

<Circle
onClick={()=>{
    if (props.dathiststate < 2022 ) {
        props.setdathiststate(props.dathiststate + 1)
      
    }
}}>

    <CircleImg src='./public/homehist/left-normal.png'
    rotateimg={"180deg"}
    >      
    </CircleImg>
</Circle>

</BoxBut>
</>
)
}

export default HomeHistHeadSwitch

