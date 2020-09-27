import React from 'react';
import { HeaderStyle, Title } from './styles';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <HeaderStyle>
      <Title> {props.headerText} </Title>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/createBook"> Create Book </NavLink>
      <NavLink to="/createGenre"> Create Genre </NavLink>
    </HeaderStyle> 
  )
}

export default Header;