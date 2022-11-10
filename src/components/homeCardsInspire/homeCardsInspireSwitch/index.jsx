import { Link } from 'react-router-dom'
import { useState } from 'react'

import './style.css'


const HomeCardsInspireSwitch=(props)=>{


return(
<>

<div className='home_card_inspire_head_switch_box'>

    <div className='home_card_inspire_head_switch_box_circle1'
     onClick={()=>{
        if (props.fourcardstate > 0 ) {
            props.setfourcardstate(props.fourcardstate-1)
        }
       }}
    >
        <img className='home_card_inspire_head_switch_box_circle1_img' src="./public/home/cards/left-normal.svg" alt="arrow" />
    </div>
    <div className='home_card_inspire_head_switch_box_circle2'
     onClick={()=>{     
        if (props.fourcardstate <3 ) {
            props.setfourcardstate(props.fourcardstate+1)
        }
       }}
    >
        <img className='home_card_inspire_head_switch_box_circle2_img' src="./public/home/cards/left-normal.svg" alt="arrow" />
    </div>
</div>

</>
)
}

export default HomeCardsInspireSwitch

