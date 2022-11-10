import { Link } from 'react-router-dom'
import { useState } from 'react'

import './style.css'


const HomeCardsInspireBoxCard=(props)=>{


    // props.fourcardstate
    // props.setfourcardstate
//     props.img
// props.id
// props.back
// style={{backgroundColor:"red"}}
return(
<>

<div onClick={()=>{props.setfourcardstate(props.id)}} className={`home_card_inspire_box_card ${(props.fourcardstate == props.id) ? "card_active": ""}`}>

<div style={{backgroundColor:props.backcolor}}>
    <img src={props.img} alt="" />
</div>

<p className={`${(props.fourcardstate == props.id) ? "text_active": ""}`}>{props.text}</p>
</div>
</>
)
}

export default HomeCardsInspireBoxCard

