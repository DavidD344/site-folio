import { Link } from 'react-router-dom'
import { useState } from 'react'
import IndicaConteudo from './indicaConteudo'
import HomeCardsInspireSwitch from './homeCardsInspireSwitch'
import HomeCardsInspireBox from './homeCardInspireBox'
import './style.css'


const HomeCardsInspire=()=>{

  const [fourCardstate, setFourCardstate] = useState(0)

return(
<>
<div className='home_card_inspire _pading_section'>

<IndicaConteudo
id={"02."}
msg={"What We Do"}
></IndicaConteudo>


<div className='home_card_inspire_head_box'>
  <h1>We Make Designs that Lead and Inpire.</h1>

  <HomeCardsInspireSwitch
    fourcardstate={fourCardstate}
    setfourcardstate={setFourCardstate}
  ></HomeCardsInspireSwitch>
</div>

<HomeCardsInspireBox
fourcardstate={fourCardstate}
setfourcardstate={setFourCardstate}
></HomeCardsInspireBox>


</div>


</>
)
}

export default HomeCardsInspire

