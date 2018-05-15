import React from 'react'
import Book from '../Book'
import { Title, Container } from './styles'


const BookShelf = (props) => {
  return (
    <Container>
      <Book bookTitle={"North America"} />
      <Title> {props.genre} </Title>
    </Container> 
  )
}

export default BookShelf;