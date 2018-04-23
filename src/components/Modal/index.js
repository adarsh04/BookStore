import React from 'react';
import styled from 'styled-components';
import { ModalDiv, ModalContent, Close } from './styles'

const Modal = (props) => {
  return (
    <ModalDiv>
      <ModalContent>
        <Close onClick={props.toggleModal}>&times;</Close>
        <p>Some text in the Modal..</p>
      </ModalContent>
    </ModalDiv>
  )  
}

export default Modal;