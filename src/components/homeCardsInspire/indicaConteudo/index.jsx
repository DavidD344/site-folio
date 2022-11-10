import { Link } from 'react-router-dom'
import { useState } from 'react'
import './style.css'


const IndicaConteudo=(props)=>{

return(
<>
<div className='indica_conteudo_box'>

    <img src="/public/logo/logo-mini.png" alt="logo" />

    <h4> <span>{props.id}</span>{props.msg}</h4>

</div>

</>
)
}

export default IndicaConteudo

