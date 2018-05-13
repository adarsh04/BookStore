import React from 'react'
import { FooterStyle, FooterTitle } from './styles';

const Footer = (props) => {
  return (
    <FooterStyle>
      <FooterTitle> {props.footerText} </FooterTitle>
    </FooterStyle> 
  )
}

export default Footer;