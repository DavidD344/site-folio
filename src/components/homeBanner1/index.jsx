import { Link } from 'react-router-dom'
import './style.css'
import HomeBanner1Cont from './homeBanner1Cont'

const HomeBanner1=()=>{

return(
<div className='home_banner_1_sect _pading_section'>
 
  <HomeBanner1Cont></HomeBanner1Cont>
  <img className='home_banner_1_hero_img' src="/public/home/hero_img.png" alt="cartoon pc" />
</div>
)
}

export default HomeBanner1

