import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/img/logoNavbar.png'
import HamburguerMenu from '../../assets/img/hamburguerMenu.png'
import { Link } from 'react-router-dom'


const DisplayFlexNav = styled.div `
display: flex;
position: fix;
background-color: transparent;
padding: 20px;
`
const MenuList = styled.li `
display: flex;
margin-left: -33%;
font-family: nasalization;
font-size: 30px;
color: #676CBE;
list-style-type: none;
`
const LogoImage = styled.img `
padding: 20px;
width: 18%;
height: 55%;
@media (max-width: 600px) { 
    display: none;
}
`
const MenuButton = styled.img `
display: inline;
width: 115%;
height: 100%;
border-radius: 28px;
@media (min-width: 600px) {
    display: none;

}
`
const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
        &:visited {
        color: #676CBE
        }
    @media (max-width: 600px) { 
        display: none;
    }
`;
const ButtonMenu = styled.button`
padding: 0;
border: none;
font: inherit;
color: inherit;
background-color: transparent;
cursor: pointer;
width: 100%;
@media (min-width: 600px) {
    display: none;
}
}
`
const ResponsiveMenuDiv = styled.div `
width: 100%; 
border-radius: 10px; 
background-color: #271C48;
font-family: nasalization;
color: #FFFFFF;
display: block;
text-align: center;
`
const ResponsiveMenuLink = styled(Link) `
text-decoration: none; 
color: #FFFFFF;
font-family: nasalization;
display: block;
&:active {
    color: #676CBE;
    border-bottom: 2px solid #91B2B7;
      }

`
const ResponsiveMenuUnorderedList = styled.li `
padding: 16% 33%;;
list-style-type: none;
`
const ResponsiveMenuClosingIcon = styled.img `
margin: 3% 0 0 82%;
`
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            menuOpen:false,
          }

      }

      handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
      }
      

      
    render(){    
        return (
        <DisplayFlexNav>
            <a href='/home'>
                <LogoImage src={Logo}/>
            </a>
            {this.state.menuOpen == false ? 
                <ButtonMenu onClick={()=>this.handleMenuClick()}>
                    <MenuButton src={HamburguerMenu} /> 
                </ButtonMenu>:
                <ResponsiveMenuDiv>
                    <ButtonMenu onClick={()=> this.handleMenuClick()}>
                        <ResponsiveMenuClosingIcon src={require('../../assets/img/closeIcon.png')}/>
                    </ButtonMenu>
                    <ResponsiveMenuUnorderedList>
                        <ul>
                            <ResponsiveMenuLink to='/home'>
                            Home
                            </ResponsiveMenuLink>
                        </ul>
                        <ul>
                            <ResponsiveMenuLink to='/services'>
                            Services
                            </ResponsiveMenuLink>
                        </ul>
                        <ul>
                            <ResponsiveMenuLink to='/network'>
                            Network
                            </ResponsiveMenuLink>
                        </ul>
                        <ul>
                            <ResponsiveMenuLink to='/aboutUs'>
                                About Us
                            </ResponsiveMenuLink>
                        </ul>
                    </ResponsiveMenuUnorderedList>
                </ResponsiveMenuDiv>
            }
            <MenuList>
                <StyledLink to="/home" style={{ textDecoration: 'none' }} > 
                    <ul>
                        Home
                    </ul>
                </StyledLink>
                <StyledLink to='/services' style={{ textDecoration: 'none' }}>
                    <ul>
                        Services
                    </ul>
                </StyledLink>
                <StyledLink to='/network'style={{ textDecoration: 'none' }}>
                    <ul>
                        Network
                    </ul>
                </StyledLink>
                < StyledLink to='/aboutUs'style={{ textDecoration: 'none' }}>
                    <ul>
                        About Us
                    </ul>
                </StyledLink>
            </MenuList>
        </DisplayFlexNav>
    )
    }
}
export default Navbar