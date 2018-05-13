import styled from 'styled-components';

const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
`

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.headerFontColor};
  margin: 0;
  font-size: ${props => props.theme.headerFontSize};
`

export { HeaderStyle, Title }