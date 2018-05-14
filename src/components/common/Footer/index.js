import React from 'react'
import { FooterStyle, FooterDate, FooterTitle } from './styles';

const Footer = (props) => {

  return (
    <FooterStyle>
      <FooterDate> {props.footerDate} </FooterDate>
      <FooterTitle> Adarsh Jegadeesan </FooterTitle>
    </FooterStyle> 
  )
}

export default Footer;