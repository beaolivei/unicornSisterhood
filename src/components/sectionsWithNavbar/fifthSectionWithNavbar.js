import React from 'react'
import styled from 'styled-components'
import BackgroundImageBack from '../../assets/img/Untitled-1-16.png'
import Navbar from '../../components/navbar/navbar.js'
import BackgroundImage from '../../assets/img/backgroundOpacity29.png'


const FifthSectionStyle = styled.div `
background-image: url(${BackgroundImage});
background-size: cover;
height: 984px;
overflow: hidden;
`

const OpacityLayer = styled.div `
background-color: rgb(230, 216, 216);
z-index: -1;
`
// const FlexBox = styled.div `
// display: flex;
// `
const TitlePage = styled.h1`
text-align: center;
color:#f9e3b9;
margin-top:5%;
font-family: 'montserrat';
`
const ContactForm = styled.form `
padding: 3%;
background-image: url(${BackgroundImageBack});
background-position: -584px -438px; 
display: block;
padding: 35px 494px;
`
const InputForm = styled.input `
border-radius: 10px;
font-family: 'montserrat';
display: block;
padding: 19px 326px;
margin: 22px;
font-size: 21px;
`
const FormTextArea = styled.textarea `
border-radius: 10px;
font-family: 'montserrat';
display: block;
width: 672px;
height: 271px;
padding: 37px 125px;
margin: 22px;
font-size: 30px;
`
const SendButton = styled.button `
background-color: #2F3461;
color: #F9E3B9;
padding: 10px 35px;
border-radius: 10px;
border-color: #F9E3B9;
font-family:'nasalization';
font-size:30px;
display: block;
margin-left: 86%;
`
const FormTitle = styled.h2 `
color:#F1D091;
margin-left: 34%;
`
const FormLabel = styled.label `
`
// const SeparatingLine = styled.div `
// background-color: #676cbe; 
// padding: 4px 5px;
// `
const OurContact = styled.div `
display: flex;
padding: 0 620px;
`
const Image = styled.img `
`
const InfoParagraph = styled.p `
font-family: 'montserrat';
font-size: 20px;
letter-spacing: 1.5px;
text-align: justify;
color: #EFACB7;
padding: 20px 41px;
display: block;
`
const IconsDisplay = styled.div `
display: block;
`

function ContactSectionNavbar (props) {
    return (
    <OpacityLayer>
        <FifthSectionStyle>
            <Navbar/>
            <TitlePage>Contact US!</TitlePage>
                <ContactForm>
                    <InputForm placeholder='Your Name'/>
                    <InputForm placeholder='Your e-mail'/>
                    <FormTextArea placeholder ='leave us a message, we will shortly reply you!'/>
                    <SendButton>Send</SendButton>
            </ContactForm>
            <OurContact>
                <Image src={require ('../../assets/img/Untitled-1-07.svg')}/>
                <InfoParagraph> contact@unicornsisterhood.com <br/>
                                +46 70 4365330
                </InfoParagraph>
                <Image src={require ('../../assets/img/instagramIcon.svg')}/>
                <Image src={require ('../../assets/img/linkedinIcon.svg')}/>
            </OurContact>
        </FifthSectionStyle>
    </OpacityLayer>

    )
}
export default ContactSectionNavbar