import { Link } from 'react-router-dom'
import { useState } from 'react'
import { BoxImgCel, Container, ImgCel} from './styles'
import HomeAchievCont from './homeAchievCont'


const HomeAchiev=()=>{

  
return(
<>
<Container className={`_pading_section`}>
    <BoxImgCel>
        <ImgCel src="./public/homeachiev/celachiev.png" alt="logo"></ImgCel>
    </BoxImgCel>
<HomeAchievCont>
    
</HomeAchievCont>

</Container>


</>
)
}

export default HomeAchiev

