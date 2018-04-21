import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components';

class BookStore extends React.Component {

  getCurrentTime = () => {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`; 
  }

  render() {
    const headerText = "Book Store";
    let footerText = this.getCurrentTime();
    
    return (
      <div>
        <Header headerText={headerText} />
        <p> This is the book store </p>
        <Footer footerText={footerText} />
      </div>
    ) 
  }
}

const appRoot = document.getElementById('app');
ReactDOM.render(<BookStore />, appRoot)