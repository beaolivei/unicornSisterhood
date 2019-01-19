import React from 'react'
import styled from 'styled-components'
import BackgroundImage from '../../assets/img/backgroundOpacity29.png'
import PopUpButton from '../contactPopUp/contactPopUp.js'

const ThirdSectionStyle = styled.div`
background-image: url(${BackgroundImage});
background-size: cover;
height: 984px;
overflow: hidden;
@media (max-width: 600px){
    height: 1272px;
    background-position: -432px -31px;
}
`
const TitlePage = styled.h1`
text-align: center;
color:#271c48;
margin-top: 156px;
@media (max-width: 600px) {
    margin-top: 45px;
    font-size: 30px;
}

`
const DevImage1 = styled.img `
margin: 23px 94px;
border-radius:51%;
width: 13%;
height: 9%;
&:hover {
    transform: scale(1.2);
    transition: transform .5s ease-out; 
  }
}
@media (max-width: 600px) {
    margin: 18px 18px;
    width: 34%;
}
`
const DevImage2 = styled.img `
margin: 393px -70px;
border-radius:51%;
width: 15%;
height: 9%;
&:hover {
    transform: scale(1.1);
    transition: transform .5s ease-out; 
}
@media (max-width: 600px){
    margin: 250px -70px;
    width: 40%;
}
`
const DevImage3 = styled.img `
margin: 138px -47px;
border-radius:51%;
width: 12%;
height: 9%;
&:hover {
    transform: scale(1.3);
    transition: transform .4s ease-out; 
  }
}
@media (max-width: 600px) {
    margin: 108px 28px;
    width: 33%;
}
`
const DevImage4 = styled.img `
margin: 35px 409px;
border-radius:51%;
width: 13%;
height: 9%;
&:hover {
    transform: scale(1.2);
    transition: transform .3s ease-out; 
  }
}
@media (max-width: 600px) {
    margin: 432px -193px;
    width: 46%;
}
`
const DevImage5 = styled.img `
margin: 284px -892px;
border-radius:51%;
width: 15%;
height: 9%;
&:hover {
    transform: scale(1.1);
    transition: transform .5s ease-out; 
  }
}
@media (max-width: 600px) {
    margin: 615px -129px;
    width: 44%;
}
`
const DevImage6 = styled.img `
margin: -101px 1251px;
border-radius:51%;
width: 13%;
height: 9%;
&:hover {
    transform: scale(1.1);
    transition: transform .5s ease-out; 
  }
}
@media (max-width: 600px){
    margin: 791px 130px;
    width: 48%;
}
`
const DevImage7 = styled.img `
margin: 409px -1530px;
border-radius:51%;
width: 12%;
height: 9%;
&:hover {
    transform: scale(1.1);
    transition: transform .5s ease-out; 
  }
}
@media (max-width: 600px) {
    margin: 1001px -415px;
    width: 38%;
}
`
const FlexBox = styled.div `
display: flex;
`
const ConectingPhotoNetwork1 = styled.div`
background-color: #676cbe; 
padding: 4px 5px;
`

function ThirdSection(props) {
    return (
        <ThirdSectionStyle>
            <TitlePage> Network </TitlePage>
            <FlexBox>
                <DevImage1 src={require('../../assets/img/jo.jpeg')}/>
                {/* <ConectingPhotoNetwork1/> */}
                <DevImage2 src={require('../../assets/img/bru.jpeg')}/>
                <DevImage3 src={require ('../../assets/img/mi.jpeg')}/>
                <DevImage4 src={require ('../../assets/img/ralfa.jpeg')}/>
                <DevImage5 src={require ('../../assets/img/mel.jpeg')}/>
                <DevImage6 src={require ('../../assets/img/mari.jpeg')}/>
                <DevImage7 src={require('../../assets/img/eu.jpeg')}/>      
            </FlexBox>
            
            <PopUpButton/>

        </ThirdSectionStyle>

    )
}
export default ThirdSection