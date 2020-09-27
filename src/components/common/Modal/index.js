import React from 'react';
import styled from 'styled-components';
import { ModalDiv,  ModalTitle, ModalContent, ModalImage, Close } from './styles'

const Modal = (props) => {
  return (
    <ModalDiv>
      <ModalContent>
        <Close onClick={props.toggleModal}>&times;</Close>
        <ModalImage src={props.bookImg}/>
        <p>{props}</p>
      </ModalContent>
    </ModalDiv>
  )  
}

export default Modal;