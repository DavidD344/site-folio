import { Link } from 'react-router-dom'
import { useState } from 'react';
import './style.css'






const LinkIconRedes=(props)=>{


return(
<>

<a href={props.link} target="_blank">
    <div className='circle_icon'>
    <img src={props.img} alt={props.alt} /> 
</div>
</a>

</>
)
}

export default LinkIconRedes