import React from 'react';
import styled from 'styled-components';
import Modal from '../common/Modal';
import { Img } from './styles'

class Book extends React.Component {
  state = {
    showModal: false
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    return (
      <div>
        <Img src="./images/book.jpg" onClick={this.toggleModal}/>
        {this.state.showModal && <Modal toggleModal={this.toggleModal} 
        bookTitle={this.props.bookTitle} bookImg="./images/bookSample.png"/>}
      </div>
    )
  }
}

export default Book;