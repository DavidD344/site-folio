import { Link } from 'react-router-dom'
import { useState } from 'react';
import './style.css'
import ButtonBox from '../buttonBox';
import MobileMenu from './mobileMenu';
import NavbarMobile from './navbarMobile';



const Navbar=()=>{

    const [navstate, setNavstate] = useState(false);
    const [pagestate, setPagestate] = useState(0);//depois aprender data pra criar variavel dentro dos conteudos html e mudar as animações

    window.onscroll = scroll;

    function scroll() {
      var scrollTop = window.pageYOffset;
      if (scrollTop > 30) {
        try {
          document.getElementById('navantes').id = 'navdepois'
        } catch (e) { 
          false 
        }
      } else {
        try {
          document.getElementById('navdepois').id = 'navantes'
        } catch (e) { 
          false
        }
      }
    }


return(
<>
 <header>
    <nav id='navantes' className='navbar _pading_section'>
       
        <Link to='/'><img src="/public/logo/light-mode.png" alt="logo" /> </Link>
       

            <ul className='navlist'>
            <li ><Link to='/'>Home</Link></li>
            <li ><Link to='/about'>About</Link></li>
            <li ><Link to='/about'>About</Link></li>
            <li ><Link to='/contact'>Contato</Link></li>
            </ul>
            <ButtonBox 
            msg={"Contact Us"}
            buttonColor={true}
          ></ButtonBox>
            <MobileMenu
            navstate={navstate}
            setnavstate={setNavstate}

            ></MobileMenu>
           
            
    </nav>
</header> 

<NavbarMobile
navstate={navstate}
setnavstate={setNavstate}
></NavbarMobile>
</>
)
}

export default Navbar