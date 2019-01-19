import React from 'react'
import styled from 'styled-components'

import BackgroundImageBack from '../../assets/img/backgroundOpacity29.png'


const FifthSectionStyle = styled.div `
background-color: #2F3461;
background-image: url(${BackgroundImageBack});
background-size: cover;
background-position: -236px 595px;
height: 984px;
overflow: hidden;
`
const TitlePage = styled.h1`
text-align: center;
color:#f9e3b9;
margin-top:5%;
font-family: 'montserrat';
`
const FormTitle = styled.h2 `
color:#F1D091;
margin-left: 34%;
`
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

function ContactSection (props) {
    return (
    <FifthSectionStyle>
        <TitlePage>Contact US!</TitlePage>
        <OurContact>
            <Image src={require ('../../assets/img/Untitled-1-07.svg')}/>
            <InfoParagraph> contact@unicornsisterhood.com <br/>
                            +46 70 4365330
            </InfoParagraph>
            <Image src={require ('../../assets/img/instagramIcon.svg')}/>
            <Image src={require ('../../assets/img/linkedinIcon.svg')}/>
        </OurContact>
    </FifthSectionStyle>

    )
}
export default ContactSection