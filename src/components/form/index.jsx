import { useState, useEffect, useLayoutEffect } from "react";
const Form=()=>{

const [nome, setNome] = useState("")

const handleChange = (event)=>{
    setNome(event.target.value)
    console.log("Mudei")
}

return(<>
<label htmlFor="Formulario">Formulario</label>
<input type="text" value={nome} onChange={handleChange}/>
<input type="submit"/>
<br /><br /><br />
</>)
}

export default Form

