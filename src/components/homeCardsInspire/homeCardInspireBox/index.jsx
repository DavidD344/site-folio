import { Link } from 'react-router-dom'
import { useState } from 'react'
import HomeCardsInspireBoxCard from './homeCardInspireBoxCard'

import './style.css'


const HomeCardsInspireBox=(props)=>{

    // setfourcardstate
    // fourcardstate
return(
<>

<div className='home_card_inspire_box_conteiner'>
    <HomeCardsInspireBoxCard
    fourcardstate={props.fourcardstate}
    setfourcardstate={props.setfourcardstate}
    text={"Strategy"}
    img={"./public/cardinsp/Graph.png"}
    id={0}
    backcolor={"#d1ecfd"}
    ></HomeCardsInspireBoxCard> 
    <HomeCardsInspireBoxCard
    fourcardstate={props.fourcardstate}
    setfourcardstate={props.setfourcardstate}
    text={"Strategy"}
    img={"./public/cardinsp/iconinsp2.png"}
    id={1}
    backcolor={"#938FFE"}
    ></HomeCardsInspireBoxCard> 
    <HomeCardsInspireBoxCard
    fourcardstate={props.fourcardstate}
    setfourcardstate={props.setfourcardstate}
    text={"Strategy"}
    img={"./public/cardinsp/iconinsp3.png"}
    id={2}
    backcolor={"#FEB979"}
    ></HomeCardsInspireBoxCard> 
    <HomeCardsInspireBoxCard
    fourcardstate={props.fourcardstate}
    setfourcardstate={props.setfourcardstate}
    text={"Strategy"}
    img={"./public/cardinsp/iconinsp4.png"}
    id={3}
    backcolor={"#FFADD0"}
    
    ></HomeCardsInspireBoxCard> 


</div>


</>
)
}

export default HomeCardsInspireBox

