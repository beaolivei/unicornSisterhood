import React from 'react'
import styled from 'styled-components'
import BackgroundImageBack from '../../assets/img/backgroundOpacity29.png'

const SectionOne = styled.section `
background-image: url(${BackgroundImageBack});
background-size: cover;
background-position: -236px 595px;
height: 984px;
overflow: hidden;
`
const DivOpaque = styled.div `
background-color:rgba(0, 0, 0, 0.5);
`
const DivFlex = styled.div `
display: flex;
@media (max-width: 600px) {
    margin: 13% 0 0 0;
    display: block;
}
`
const WomenImage = styled.img `
width: 1325px;
height: 841px;
margin: 112px -857px 0 294px;
@media (max-width: 600px) {
    width: 100%;
    height: 20%;
    margin: 0;
}
`
const TitleImage = styled.img `
margin: 20% 29% 0 54%;
width: 35%;
@media (max-width: 600px) { 
    display: none;
}
`
const LogoForResponsive = styled.img `
width: 38%;
margin-left: 32%;
@media (min-width: 600px) { 
    display: none;

}
`
const TextBody = styled.div `
font-family: 'montserrat';
letter-spacing: 1px;
font-size: 28px;
width: 80%;
color: #271C48;
margin-left: 35%;
text-align: justify;
line-height: 32.5px;
@media (max-width: 600px) {
    margin-left:0;
    font-size: 18px;
    width: 88%;
    margin-left: 6%;
}

;
`

function FirstSection (props) {
    return ( 
        <SectionOne>
            <div>
                <DivFlex>
                    <div>
                        <TitleImage src={require ('../../assets/img/Title1.png')}/>
                        <LogoForResponsive src={require ('../../assets/img/Untitled-1-01.png')}/>
                        <TextBody> 
                            <p>We are a tech consultancy powered by outstanding women in Tech. We are a broad network of software engineers, graphic designers, data analysists and content creators dedicated to offering our clients beautiful and efficient digital solutions. We offer a big range of personalized services, depending on our client's needs. We love what we do and we love working together. We combine a different set of skills and backgrounds to offer the smartest, most beautiful and creative tech products, such as web pages, online stores, apps, and many others. Get in touch and let us know how we can help you revolutionize your business. </p></TextBody>
                            </div>
                    <WomenImage src ={require ('../../assets/img/womenBackground.png')}/>
                </DivFlex>
            </div>
            
        </SectionOne>

    )
}
export default FirstSection