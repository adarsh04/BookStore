import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  position:absolute;
  bottom: 0;
  width: 100%;
`

const FooterTitle = styled.h3`
  font-size: 2em;
  text-align: center;
  color: #08302F;
`

const Footer = (props) => {
  return (
    <Container>
      <FooterTitle> {props.footerText} </FooterTitle>
    </Container> 
  )
}

export default Footer;