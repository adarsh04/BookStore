import React from 'react';
import { HeaderStyle, Title } from './styles';

const Header = (props) => {
  return (
    <HeaderStyle>
      <Title> {props.headerText} </Title>
    </HeaderStyle> 
  )
}

export default Header;