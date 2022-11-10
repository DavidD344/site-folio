import { Link } from 'react-router-dom'
import './style.css'

const ButtonBox=(props)=>{

  // const selectColor = ()=>{


     
  // }
     
return(
  <>
  
  <button className={`button_padr ${props.buttonColor ? "but_blue_dark": "but_blue_white"}`}>{props.msg}</button>
 
  </>
)
}

export default ButtonBox

