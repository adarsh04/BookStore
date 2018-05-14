import styled from 'styled-components';

const FooterStyle = styled.footer`
  position: fixed;
  width: 100%;
`
const FooterDate = styled.p`
  position: relative;
  float: left;
  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.headerFontColor};
`

const FooterTitle = styled.p`
  position: relative;
  float: right;
  left: -0.6rem;
  font-size: ${props => props.theme.fontSize};
  color: ${props => props.theme.headerFontColor};
`

export { FooterStyle, FooterDate, FooterTitle }