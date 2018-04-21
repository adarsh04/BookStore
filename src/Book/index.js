import React from 'react';
import styled from 'styled-components';
import { Img } from './styles'

const openModal = () => {
  
}

const Book = () => {
  return (
    <div>
      <Img src="./images/book.jpg" onclick={openModal}/> 
    </div>
  )
    
}

export default Book;