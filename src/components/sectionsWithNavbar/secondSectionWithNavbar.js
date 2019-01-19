import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../../assets/img/backgroundPatterns.svg'
import Navbar from '../../components/navbar/navbar.js'

const OpacityLayer = styled.div `
background-color: rgb(230, 216, 216);
z-index: -1;
`
const NavFixed = styled.div `
position: fixed;
`
const SecondSectionStyle = styled.div`
background-image: url(${BackgroundImage});
background-size: cover;
height: 984px;
overflow: hidden;
@media (max-width: 600px) {
    margin:0;
    height: 100%;
}
`
const Boxes = styled.div`
width: 437px;
height: 439px;
margin-left: 148px;
background-color: #f3f3f6;
border-radius: 10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
@media (max-width: 600px) {
    width:89%;
    margin: 22px;
    height: 393px;
    padding: 2% 0;
}
`
const TitlePage = styled.h1`
text-align: center;
color:#EFACB7;
margin: 150px 0 95px 0;
@media (max-width: 600px) {
    margin: 3% 0 0 0; 
    font-size: 30px; 
}
`
const Title1 = styled.h2`
text-align: center; 
color: #91B2B7;
`
const Line1 = styled.div `
background-color:#91B2B7; 
padding: 4px 5px;
margin: 0 39px;
`
const Title2 = styled.h2`
text-align: center; 
color:#F1D091;
`
const Line2 = styled.div `
background-color:#F1D091; 
padding: 4px 5px;
margin: 0 39px;
`
const Title3 = styled.h2`
text-align: center; 
color: #676CBE;
`
const Line3 = styled.div `
background-color:#676CBE; 
padding: 4px 5px;
margin: 0 39px;
`

const FlexBox = styled.div`
display: flex;
@media (max-width: 600px) {
    display: block;
}
`
const Paragraph = styled.p`
font-family: 'montserrat';
font-size: 20px;
letter-spacing: 1.5px;
text-align: justify;
color: #271C48;
padding: 20px 41px;
@media (max-width: 600px) {
    font-size: 18px;
    padding: 0px 26px;
}
`
const PageTitle = styled.h2`
font-family: 'montserrat bold';
`
function SecondSection(props) {
    return (
        <OpacityLayer>
        <NavFixed>
            <Navbar/>
        </NavFixed>
        <SecondSectionStyle>
            <TitlePage> Services </TitlePage>
            <FlexBox>
                <Boxes>
                    <Title1>Tech Planning</Title1>
                    <Paragraph>
                    What is the best tech to help you reach the point you want? Based on your product or service, we will think which are the most effective tools for you to achieve the best result. Keeping in mind your company goals, we will use our international network to find which are the best options for you in terms of performance and efficiency. 
                        
                    </Paragraph>
                    <Line1/>
                </Boxes>
                <Boxes>
                    <Title2>User Friendly <br/> Design</Title2>
                    <Paragraph>
                    We will design a beautiful and smart solution that your clients will love to use! 
                        We believe that design should be done with its users in mind, that users want clarity and simplicity and that for elaborating good solutions we need to know our audience as well as we can!  The result? A product that 
                   your clients can't live without!
                        </Paragraph>
                    <Line2/>
                </Boxes>
                <Boxes>
                    <Title3>Smart Code</Title3>
                    <Paragraph>
                    We code that beautiful solution to you and we add on it many tools to help you keep track of its success and points to be improved.
                        We make sure everything is working perfectly and you that your digital solution is smart and fast. 
                        We believe in safe, fast and well-written code that will make you go further!
                    </Paragraph>
                    <Line3/>
                </Boxes>
            </FlexBox>
        </SecondSectionStyle>
        </OpacityLayer>

    )
}
export default SecondSection
