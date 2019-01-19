import React from 'react'
import styled from 'styled-components'
const ContactUsButton = styled.button `
background-color: #2F3461;
color: #F9E3B9;
padding: 10px 35px;
border-radius: 10px;
border-color: #F9E3B9;
font-family:'nasalization';
font-size:30px;
`
function PopUpButton (props){
    return(
            <ContactUsButton>Contact Us!</ContactUsButton>)
    }


export default PopUpButton
