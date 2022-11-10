import { Link } from 'react-router-dom'
import { useState } from 'react';
import './style.css'
import LinkIconRedes from './linkIconRedes';
import MobileMenu from '../mobileMenu';






const NavbarMobile=(props)=>{


return(
<>
<nav className={`_pading_section navbar_mobile ${props.navstate ? "navbar_mobile_active": ""}`}  
// onClick={()=>{
//   props.setnavstate(!props.navstate);
//  }}
 >

<div className='navbar_row'>
       
<Link to='/'><img src="/public/logo/dark-mode.png" alt="logo" /> </Link>

<MobileMenu
            navstate={props.navstate}
            setnavstate={props.setnavstate}

></MobileMenu>
           
</div>

       <ul className='navbar_mobile_navlist'>
       <li ><Link style={{color: "#fff"}} to='/'>Home</Link></li>
       <li ><Link to='/about'>About</Link></li>
       <li ><Link to='/about'>About</Link></li>
       <li ><Link to='/contact'>Contato</Link></li>
       </ul>
       <div className='boxlink_icons'>
       <LinkIconRedes
        img={"./public/navbar/logo-facebook.png"}
        link={"https://www.linkedin.com/in/david-freitas-d344"}
        alt={"Icone"}
       ></LinkIconRedes>
       <LinkIconRedes
        img={"./public/navbar/logo-youtube.png"}
        link={"https://www.linkedin.com/in/david-freitas-d344"}
        alt={"Icone"}
       ></LinkIconRedes>
       <LinkIconRedes
       img={"./public/navbar/logo-instagram.png"}
        link={"./https://www.linkedin.com/in/david-freitas-d344"}
        alt={"Icone"}
       ></LinkIconRedes>
       </div>
</nav>

</>
)
}

export default NavbarMobile