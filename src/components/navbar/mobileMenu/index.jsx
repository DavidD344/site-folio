import { Link } from 'react-router-dom'
import { useState } from 'react'
import './style.css'


const MobileMenu=(props)=>{

  
return(
<>
<div className={`hamb_menu ${props.navstate ? "nav_active": ""}`}
 onClick={()=>{
  props.setnavstate(!props.navstate);
 }}
>
</div>

</>
)
}

export default MobileMenu