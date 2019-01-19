import React from 'react'
import Navbar from '../components/navbar/navbar.js'
import FirstSection from '../components/sectionsWithoutNavbar/firstSection.js'
import SecondSection from '../components/sectionsWithoutNavbar/secondSection.js'
import ThirdSection from '../components/sectionsWithoutNavbar/thirdSection.js'
import FourthSection from '../components/sectionsWithoutNavbar/fourthSection.js'
import FifthSection from'../components/sectionsWithoutNavbar/fifthSection.js'


import styled from 'styled-components'

const NavFixed = styled.nav `
position: fixed;
`
const OpacityLayer = styled.div `
background-color: rgb(230, 216, 216);
z-index: -1;
`
const ButtonFixed = styled.div `
position: fixed;
margin: -2.5% 0 0 84%;
`
class LandingPage extends React.Component{
        constructor(props) {
            super(props);
            this.state ={
                isLinkinNavbarClicked: false,
            }
        }
        render() {
        return(
            <OpacityLayer>
                <NavFixed>
                    <Navbar/>
                </NavFixed>
                <FirstSection idName='home'/>
                <SecondSection idName='services'/>
                <ThirdSection className='network'/>
                <FourthSection className= 'aboutUs'/>
           </OpacityLayer>
        )
    
}
}
export default LandingPage