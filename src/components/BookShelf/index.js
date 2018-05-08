import React from 'react'
import Book from '../Book'
import { Title, Container } from './styles'


const BookShelf = (props) => {
  return (
    <Container>
      <Title> {props.genre} </Title>
      <Book bookTitle={"North America"} />
    </Container> 
  )
}

export default BookShelf;