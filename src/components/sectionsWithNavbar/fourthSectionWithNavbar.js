import React from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar/navbar.js'
import BackgroundImageBack from '../../assets/img/backgroundOpacity29.png'

const OpacityLayer = styled.div `
background-color: rgb(230, 216, 216);
z-index: -1;
`
const NavFixed = styled.nav `
position: fixed;
`
const SessionHolder = styled.section`
background-image: url(${BackgroundImageBack});
background-size: cover;
height: 1265px;
overflow: hidden;
`
const BoxText = styled.div`
background-color: #cac2e0; 
width: 50%;
height: 78%;
margin: 6% 28% 0 28%;
border-radius: 10px;
@media (max-width: 600px) {
    width: 100%;
    height: 100%;
    margin: -8% 0 0 0;
    border-radius: 0;
}
`
const TitlePage = styled.h1`
text-align: center;
color:#2F3461;
padding: 26px;
`
const WomenImage = styled.img`
width: 80%;
height: 44%;
margin-left: 9%;
@media (max-width: 600px) {
    width: 100%;
    height: 20%;
    margin-left: 0;
}
`
const AboutUsText = styled.textarea`
width: 72%;
height: 33%;
font-family: 'montserrat';
font-size: 20px;
letter-spacing: 1.5px;
text-align: justify;
color: #271C48;
padding: 20px 41px;
margin: 5% 9%;
@media (max-width: 600px){
    padding: 13px 36px;
    margin: 2% 4%;
    font-size: 18px;
    height: 57%;
}
`
const OurContact = styled.div`
display: flex;
padding: 0 620px;
margin-top: 2%;
@media (max-width: 600px) {
    margin-top: -39%;
    padding: 0;
    display: block;
 
}
`
const InfoParagraph = styled.p`
font-family: 'montserrat';
font-size: 20px;
letter-spacing: 1.5px;
text-align: justify;
color: #271c48;
padding: 20px 41px;
display: block;
@media (max-width: 600px) {
    margin: 18px 0 4px 27px;;
    padding: 0;
}
`
const LogoImage = styled.img`
@media (max-width: 600px) {
    display: none;
}
`
const ImageSocialMediaIcons = styled.img `
@media (max-width: 600px) {
    width: 80%;
}
`
const Linkto = styled.a`

`
const LinksSocialMedia = styled.div `
display: flex;
@media (max-width: 600px){
    margin: -7px 0px 0px 111px;
}
`

function FourthSectionNavbar (props) {
    return(
        <OpacityLayer>
        <NavFixed>
            <Navbar/>
        </NavFixed>
        <SessionHolder>
        <BoxText>
                <TitlePage> About US</TitlePage>
                <WomenImage src={require('../../assets/img/USMeeting.jpg')} />
                <AboutUsText> We are a 100% female IT Company that creates, designs and builds digital products. We differentiate ourselves not only for the high quality of our programming skills but also with the fact that we, as women,  see the world from a different angle, which makes the solution we produce together also a more creative one. 
Working together is the key ingredient of our solution's success. We've been working together for some time, we believe in each other's work and our work environment is strongly supportive and stimulating, which allows us to always surpass our client's expectations. The Unicorn Sisters are talented digital workers, specialized in software development, graphic design, data analysis, and creative strategy.  The fact that we are all women working in the tech industry is not the only thing that makes us special, even though we must recognize that the area is mainly dominated by white male professionals, with the same mental models. What all the women here also have in common is that we are extremely determined, obsessed with technology and we are always learning and improving. A very powerful combination that leads to the creation of great products! We are experient tech developers and while technology and software is the core competence for each of us we all have very different backgrounds and skills, that work really well in a complementary way. The fact that we are very different individuals give us the possibility to produce something unique for every client we work with. We believe in the disruptive power of technology and know that for it to reach its maximum potential we need more women happily and attentive working with it and that is what we do at Unicorn Sisterhood. If you want to have an extraordinary technological product you need extraordinary women working on it, so let us know how we can help you make the most of your solution!</AboutUsText>
            </BoxText>
            <OurContact>
                <LogoImage src={require('../../assets/img/Untitled-1-07.svg')} />
                <InfoParagraph> contact@unicornsisterhood.com <br />
                    +46 70 4365330
                </InfoParagraph>
                <LinksSocialMedia>
                    <Linkto href='https://www.instagram.com/unicornsisterhood/'>
                        <ImageSocialMediaIcons src={require('../../assets/img/instagramIcon.svg')} />
                    </Linkto>
                    <Linkto style={{ marginTop: '4px'}} href="https://www.linkedin.com/company/unicornsisterhood/">
                        <ImageSocialMediaIcons src={require('../../assets/img/linkedinIcon.svg')} />
                    </Linkto>
                </LinksSocialMedia>
                
            </OurContact>
            </SessionHolder>
        </OpacityLayer>

    )
}
export default FourthSectionNavbar
