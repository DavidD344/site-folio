import { Link } from 'react-router-dom'
import { useState } from 'react'
import {PlanBox, PlanImg} from './styles'




const HomeHistBodyPlan=(props)=>{
    
    let atImg = "./public/homehist/4desktop.png";
    let listImg = {
        imgpar:"./public/homehist/4desktop.png",
        imgimp:"./public/homehist/coffee-cup.png" 
    };
    
   switch ((props.dathiststate % 2)) {
    case 0:
        atImg =listImg.imgpar;
        break;
   
    default:
        atImg =listImg.imgimp;
        break;
   }

return(
<>
<PlanBox className='_pading_section'>
    <PlanImg src={atImg} alt="Imagem Desktop">
    </PlanImg>
</PlanBox>

</>
)
}

export default HomeHistBodyPlan

