import React from 'react'
import styled from 'styled-components';
import Book from '../Book'

const Title = styled.h4`
  font-size: 14px;
  color: violetblue;
`

const Container = styled.div`
  position: relative
  bottom: 40px;
  width: 80px;
  height: 120px;
  border-bottom: brown;
`

const BookShelf = (props) => {
  return (
    <Container>
      <Title> {props.genre} </Title>
      <Book bookTitle={"North America"} />
    </Container> 
  )
}

export default BookShelf;