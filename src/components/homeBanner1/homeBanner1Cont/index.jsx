import { Link } from 'react-router-dom'
import './style.css'
import ButtonBox from '../../buttonBox'

const HomeBanner1Cont=()=>{

     
return(

  <div className='container'>
   
    <h1>Stand Out <br />
     from The Crowd.</h1>
     <br /> <br />
     
    <p>Agency is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.</p>
    <br /> <br /><br /><br />
      <ButtonBox
      msg="Recent Work"
      buttonColor={false}
      ></ButtonBox> 
    <br /><br /><br />
    <div className='box_scroll'>
    <img src="/public/home/Circle-Arrow/arrow.png" alt="scrolldown" /> <p>Scroll Down</p>
    </div>

  </div>
)
}

export default HomeBanner1Cont

