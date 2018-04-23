import React from 'react';
import styled from 'styled-components';
import { ModalDiv, ModalContent, Close } from './styles'

const Modal = (props) => {
  return (
    <ModalDiv>
      <ModalContent>
        <Close onClick={props.toggleModal}>&times;</Close>
        <p>{props.bookTitle}</p>
      </ModalContent>
    </ModalDiv>
  )  
}

export default Modal;