import React from 'react';
import styled from 'styled-components';

const mainTheme = {
  fontColor: '#000000',
  fontSize: '1.25rem',
  headerFontSize: '3.125rem',
  headerFontColor: '#006400',
  buttonColor: '#006400',
  buttonText: 'white'
}

const Container = styled.div`
  height: 100%;
`

const BookShelfContainer = styled.div`
  position: relative;
  top: 5.875rem;
  display: grid;
  grid-template-columns: auto auto auto;
  height: 40rem;
  grid-gap: 0rem 0rem;
`
export { Container, BookShelfContainer, mainTheme };