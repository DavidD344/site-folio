import { Link } from 'react-router-dom'
import { useState } from 'react'
import {Container, TopBg} from './styles'
import HomeHistHead from './homeHistHead'
import HomeHistBody from './homeHistBody'



const HomeHist=()=>{

    const [dathiststate, setDathiststate] = useState(2018);
return(
<>
<TopBg>
<Container>

    <HomeHistHead
    dathiststate={dathiststate}
    setdathiststate={setDathiststate}
    ></HomeHistHead>

    <HomeHistBody
    dathiststate={dathiststate}
    setdathiststate={setDathiststate}
    ></HomeHistBody>

</Container>
</TopBg>
</>
)
}

export default HomeHist

