import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 4em;
  text-align: center;
  color: #08302F;
`

const Header = (props) => {
  return (
    <div>
      <Title> {props.headerText} </Title>
    </div> 
  )
}

export default Header;